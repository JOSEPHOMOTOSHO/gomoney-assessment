import { Joi } from '../../utils';

export const bodySchema = Joi.object({
    homeTeamId: Joi.string().min(24).max(24).required().required(),
    awayTeamId: Joi.string().min(24).max(24).required().required().trim(),
    fixtureDate: Joi.date().greater('now').required(),
    homeTeamScore: Joi.number(),
    awayTeamScore: Joi.number()
});
