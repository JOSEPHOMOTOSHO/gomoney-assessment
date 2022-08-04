import { UserType } from '../../types';
import { Joi } from '../../utils';

export const bodySchema = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().required().alphanum().trim(),
  confirmPassword: Joi.required().valid(Joi.ref('password')),
  username: Joi.string().required().trim(),
  userType: Joi.string().valid(...Object.values(UserType)).required().trim()
});
