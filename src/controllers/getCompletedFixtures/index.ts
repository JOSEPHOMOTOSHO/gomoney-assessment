import { Request, Response } from 'express';
import { Fixture } from '../../models';

export const getCompletedFixtures = async (_req: Request, res: Response) => {
    const fixtures = await Fixture.find({ status: "completed" }).populate("homeTeam awayTeam");
    if (!fixtures) {
        return res.status(403).json({ message: 'No Completed Fixtures in the premier league' });
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
