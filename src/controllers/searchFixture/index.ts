import { Request, Response } from 'express';
import { Fixture, } from '../../models';


export const searchFixture = async (req: Request, res: Response) => {
    const { team, status } = req.query;
    try {
        let pipeline = <any>[
            {
                '$sort': {
                    'createdAt': -1
                }
            }, {
                '$lookup': {
                    'from': 'teams',
                    'localField': 'homeTeam',
                    'foreignField': '_id',
                    'as': 'home_team'
                }
            }, {
                '$unwind': {
                    'path': '$home_team',
                    'preserveNullAndEmptyArrays': true
                }
            }, {
                '$lookup': {
                    'from': 'teams',
                    'localField': 'awayTeam',
                    'foreignField': '_id',
                    'as': 'away_team'
                }
            }, {
                '$unwind': {
                    'path': '$away_team',
                    'preserveNullAndEmptyArrays': true
                }
            }, {
                '$addFields': {
                    'awayTeam': '$away_team.teamName',
                    'homeTeam': '$home_team.teamName'
                }
            }
        ]
        if (team) {
            let match = {
                $match: {
                    $or: [
                        { 'homeTeam': { $eq: team } },
                        { 'awayTeam': { $eq: team } }
                    ]
                }
            }
            pipeline = [...pipeline, match]
        }
        if (status) {
            let match = {
                $match: {
                    'status': status,
                }
            }
            pipeline = [...pipeline, match]

        }
        let fixtures = await Fixture.aggregate(pipeline);
        return res.status(200).json({
            data: fixtures,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }

};
