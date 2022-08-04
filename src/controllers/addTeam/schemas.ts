import { TeamNameType } from '../../types';
import { Joi } from '../../utils';

export const bodySchema = Joi.object({
    teamName: Joi.string().valid(...Object.values(TeamNameType)).trim().required(),
});
