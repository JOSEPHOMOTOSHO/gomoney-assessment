import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { Fixture, Team } from '../../models';
import { bodySchema } from './schemas';
import { v4 as uuidv4 } from 'uuid';

export const addFixture = async (req: Request, res: Response) => {
    const { body } = req;
    const { error, value } = bodySchema.validate(body);

    if (error) {
        return res.status(400).json({
            error: {
                success: false,
                message: parseValidationErrors(error),
            },
        });
    }

    const { homeTeamId, awayTeamId, fixtureDate } = value;
    try {
        const isFixtureExists = await Fixture.findOne({ ...value })
        if (isFixtureExists) {
            return res.status(400).json({ message: 'Fixture already Exists' });
        }

        if (homeTeamId === awayTeamId) {
            return res.status(400).json({ message: 'You cannot play the same team' });
        }

        const homeTeam = await Team.findById({ _id: homeTeamId });
        if (!homeTeam) {
            return res.status(404).json({ message: 'Home Team doesnt exist' });
        }

        const awayTeam = await Team.findById({ _id: awayTeamId });
        if (!awayTeam) {
            return res.status(404).json({ message: 'Away Team doesnt exist' });
        }

        const newFixture = new Fixture({
            homeTeam: homeTeamId,
            awayTeam: awayTeamId,
            fixtureDate,
            fixtureLink: uuidv4()
        })
        await newFixture.save();
        return res.status(200).json({
            data: newFixture,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
