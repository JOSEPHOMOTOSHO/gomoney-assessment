import { Request, Response } from 'express';
import { Fixture } from '../../models';
import { redisClient } from '../../app';

export const getFixtures = async (_req: Request, res: Response) => {
    redisClient.get('fixtures', (_err, data) => {
        if (data) {
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
    const fixtures = await Fixture.find({}).populate("homeTeam awayTeam");
    redisClient.set('fixtures', JSON.stringify(fixtures), 'EX', 10 * 60)
    if (!fixtures) {
        return res.status(403).json({ message: 'No Fixtures in the premier league' });
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
