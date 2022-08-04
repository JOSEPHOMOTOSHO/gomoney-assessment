import { Request, Response } from 'express';
// import { parseValidationErrors } from '../../middlewares';
import { Fixture, } from '../../models';
// import { bodySchema } from './schemas';
// import { v4 as uuidv4 } from 'uuid';

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
        // search by name
        if (team) {
            // search by home
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
            // search by home
            let match = {
                $match: {
                    'status': status,
                }
            }
            pipeline = [...pipeline, match]

        }
        let fixtures = await Fixture.aggregate(pipeline);
        console.log(fixtures)
        return res.status(200).json({
            data: fixtures,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }



























    /*
     {
                    $addFields: {
                        'away_name': '$away_team.name',
                        'home_name': '$home_team.name'
                    }
                }
    */

    // const { error, value } = bodySchema.validate(body);

    // if (error) {
    //     return res.status(400).json({
    //         error: {
    //             success: false,
    //             message: parseValidationErrors(error),
    //         },
    //     });
    // }
    //what does my fixture have: homeTeam, awayTeam, , status , fixturelink

    //     try {
    //         const isFixtureExists = await Fixture.findOne({ ...value })
    //         if (isFixtureExists) {
    //             return res.status(400).json({ message: 'Fixture already Exists' });
    //         }

    //         if (homeTeamId === awayTeamId) {
    //             return res.status(400).json({ message: 'You cannot play the same team' });
    //         }

    //         const homeTeam = await Team.findById({ _id: homeTeamId });
    //         if (!homeTeam) {
    //             return res.status(404).json({ message: 'Home Team doesnt exist' });
    //         }

    //         const awayTeam = await Team.findById({ _id: awayTeamId });
    //         if (!awayTeam) {
    //             return res.status(404).json({ message: 'Away Team doesnt exist' });
    //         }

    //         const newFixture = new Fixture({
    //             homeTeam: homeTeamId,
    //             awayTeam: awayTeamId,
    //             fixtureDate,
    //             fixtureLink: uuidv4()
    //         })
    //         await newFixture.save();
    //         return res.status(200).json({
    //             data: newFixture,
    //         });
    //     } catch (err: any) {
    //         return res.status(500).json({ error: { message: err.message } });
    //     }
};
