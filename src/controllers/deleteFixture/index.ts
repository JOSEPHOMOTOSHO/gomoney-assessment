import { Request, Response } from 'express';
import { Fixture } from '../../models';

export const deleteFixture = async (req: Request, res: Response) => {
    const { fixtureId } = req.params;
    if (!fixtureId) {
        return res.status(404).json({ message: 'Pass in the Fixture Id' });
    }
    try {
        const fixture = await Fixture.findOne({ _id: fixtureId });
        if (!fixture) {
            return res.status(404).json({ message: 'Fixture doesnt exist in the premier league' });
        }
        await Fixture.deleteOne({ _id: fixture.id })
        return res.status(200).json({
            message: "Fixture deleted successfully",
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
