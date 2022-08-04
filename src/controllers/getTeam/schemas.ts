import { Joi } from '../../utils';

export const paramSchema = Joi.object({
    teamId: Joi.objectId().required(),
})
