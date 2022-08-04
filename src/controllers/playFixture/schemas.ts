import { Joi } from '../../utils';

export const bodySchema = Joi.object({
    homeTeamId: Joi.string().min(24).max(24).required(),
    awayTeamId: Joi.string().min(24).max(24).required().trim(),
    fixtureDate: Joi.date().greater('now'),
    homeTeamScore: Joi.number(),
    awayTeamScore: Joi.number()
});

export const paramSchema = Joi.object({
    fixtureId: Joi.objectId().required(),
})
