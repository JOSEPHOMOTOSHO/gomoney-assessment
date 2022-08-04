import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { Team } from '../../models';
import { bodySchema, paramSchema } from './schemas';

export const editTeam = async (req: Request, res: Response) => {
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

    const { teamName } = valueBody;
    const { teamId } = valueParams;

    try {
        if (!teamName) {
            return res.status(401).json({ message: 'No Data to Update' });
        }

        const team = await Team.findById(teamId);

        if (!team) {
            return res.status(404).json({ message: 'Team does not exist' });
        }

        team.teamName = teamName || team.teamName;

        await team.save();

        return res.status(200).json({
            data: team,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
