import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { Fixture } from '../../models';
import { playMatch } from '../../utils';
import { paramSchema } from './schemas';

export const playFixture = async (req: Request, res: Response) => {
    const { params } = req;
    const { error: errorParams, value: valueParams } = paramSchema.validate(params);

    const error = errorParams;
    if (error) {
        return res.status(400).json({
            error: {
                success: false,
                message: parseValidationErrors(error),
            },
        });
    }
    const { fixtureId } = valueParams;
    try {
        const fixture = await Fixture.findById({ _id: fixtureId })
        if (!fixture) {
            return res.status(404).json({ message: 'No Such Fixture' });
        }

        if (fixture.status === "completed") {
            return res.status(404).json({ message: 'This fixture has been completed' });
        }

        playMatch(fixture)
        await fixture.save()
        return res.status(200).json({
            data: fixture,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
