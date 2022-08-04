import { Request, Response } from 'express';
import { Team } from '../../models';


export const searchTeam = async (req: Request, res: Response) => {
    const { name } = req.query;
    try {
        let aggregation = <any>[
            {
                "$match": {
                    "teamName": name
                }
            }, {
                "$sort": {
                    "createdAt": -1
                }
            }
        ]

        let team = await Team.aggregate(aggregation);
        return res.status(200).json({
            data: team,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
