import { Request, Response } from 'express';
import { Fixture } from '../../models';
import { redisClient } from '../../app';

export const getPendingFixtures = async (_req: Request, res: Response) => {
    redisClient.get('pendingFixtures', (_err, data) => {
        if (data) {
            console.log(data)
            return res
                .status(200)
                .send({
                    data: {
                        teams: JSON.parse(data)
                    },
                })
        }
        return
    })
    const fixtures = await Fixture.find({ status: "pending" }).populate("homeTeam awayTeam");
    redisClient.set('pendingFixtures', JSON.stringify(fixtures), 'EX', 10 * 60)
    if (!fixtures) {
        return res.status(403).json({ message: 'No Pending Fixtures in the premier league' });
    }
    try {
        return res.status(200).json({
            data: {
                fixtures
            },
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
