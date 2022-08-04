import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { Team } from '../../models';
import { paramSchema } from './schemas';


export const getTeam = async (req: Request, res: Response) => {
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


    const { teamId } = valueParams;

    const team = await Team.findOne({ _id: teamId });
    if (!team) {
        return res.status(403).json({ message: 'No Such Team in the premier league' });
    }
    try {
        return res.status(200).json({
            data: {
                teamName: team.teamName
            },
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
