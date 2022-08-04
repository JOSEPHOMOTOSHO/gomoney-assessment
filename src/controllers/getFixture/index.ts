import { Request, Response } from 'express';
import { Fixture } from '../../models';

export const getFixture = async (req: Request, res: Response) => {
    const { fixtureId } = req.params;

    const fixture = await Fixture.findOne({ _id: fixtureId }).populate("homeTeam awayTeam");
    if (!fixture) {
        return res.status(403).json({ message: 'No Such Fixture in the premier league' });
    }
    try {
        return res.status(200).json({
            data: {
                fixture
            },
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
