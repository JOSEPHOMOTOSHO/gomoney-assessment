import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { Fixture, Team } from '../../models';
import { bodySchema, paramSchema } from './schemas';

export const updateFixture = async (req: Request, res: Response) => {

    const { body, params } = req;
    const { error: errorBody, value: valueBody } = bodySchema.validate(body);
    const { error: errorParams, value: valueParams } = paramSchema.validate(params);


    const error = errorBody || errorParams;
    if (error) {
        return res.status(400).json({
            error: {
                success: false,
                message: parseValidationErrors(error),
            },
        });
    }
    const { homeTeamId, awayTeamId, fixtureDate } = valueBody;
    const { fixtureId } = valueParams;
    try {
        if (!homeTeamId && !awayTeamId && !fixtureDate) {
            return res.status(401).json({ message: 'No Data to Update' });
        }
        if (homeTeamId) {
            const homeTeam = await Team.findById({ _id: homeTeamId });
            if (!homeTeam) {
                return res.status(404).json({ message: 'Home Team doesnt exist' });
            }
        }

        if (awayTeamId) {
            const awayTeam = await Team.findById({ _id: awayTeamId });
            if (!awayTeam) {
                return res.status(404).json({ message: 'Away Team doesnt exist' });
            }

        }
        const fixture = await Fixture.findById({ _id: fixtureId })
        if (!fixture) {
            return res.status(404).json({ message: 'No Such Fixture' });
        }

        fixture.homeTeam = homeTeamId || fixture.homeTeam
        fixture.awayTeam = awayTeamId || fixture.awayTeam
        fixture.fixtureDate = fixtureDate || fixture.fixtureDate

        await fixture.save()
        return res.status(200).json({
            data: fixture,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
