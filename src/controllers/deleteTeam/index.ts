import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { Team } from '../../models';
import { paramSchema } from './schemas';

export const deleteTeam = async (req: Request, res: Response) => {
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
    if (!teamId) {
        return res.status(404).json({ message: 'Pass in the team Id' });
    }
    try {
        const team = await Team.findOne({ _id: teamId });
        if (!team) {
            return res.status(404).json({ message: 'Team doesnt exist in the premier league' });
        }
        await Team.deleteOne({ _id: team.id })
        return res.status(200).json({
            message: "Team deleted successfully",
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
