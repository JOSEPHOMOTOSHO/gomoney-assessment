import { Joi } from '../../utils';

export const bodySchema = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().required().alphanum().trim(),
});
