import { Request, Response } from 'express';
import { Team } from '../../models';
import { redisClient } from '../../app';

export const getTeams = async (_req: Request, res: Response) => {
    redisClient.get('teams', (_err, data) => {
        if (data) {
            console.log(data)
            return res
                .status(200)
                .json({
                    data: {
                        teams: JSON.parse(data)
                    },
                })
        }
        return
    })
    const teams = await Team.find({});
    redisClient.set('teams', JSON.stringify(teams), 'EX', 10 * 60)
    if (!teams) {
        return res.status(403).json({ message: 'No Teams' });
    }
    try {
        return res.status(200).json({
            data: {
                teams
            },
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
