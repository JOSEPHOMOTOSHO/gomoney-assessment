import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { Team } from '../../models';
import { bodySchema } from './schemas';

export const addTeam = async (req: Request, res: Response) => {
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
    const { teamName } = value;
    try {
        const team = await Team.findOne({ teamName });
        if (team) {
            return res.status(409).json({ message: 'Team already in the premier league' });
        }

        const newTeam = new Team({ teamName })
        await newTeam.save();
        return res.status(201).json({
            data: newTeam,
        });
    } catch (err: any) {
        return res.status(500).json({ error: { message: err.message } });
    }
};
