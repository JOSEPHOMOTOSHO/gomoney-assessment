import { Request, Response } from 'express';
import { parseValidationErrors } from '../../middlewares';
import { User } from '../../models';
import { hashedPassword } from '../../utils';
import { bodySchema } from './schemas';

export const signUp = async (req: Request, res: Response) => {
  const { body } = req;

  const { error, value } = bodySchema.validate(body);

  if (error) {
    console.log(res.statusMessage, "beans")
    return res.status(400).json({
      error: {
        success: false,
        message: parseValidationErrors(error),
      },
    });
  }

  const { email, password, username, userType } = value;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(404).json({ message: 'User already exists' });
    }

    const user = new User({
      email,
      password: await hashedPassword(password),
      username,
      userType
    });

    await user.save();
    return res.status(201).json({
      message: 'User created successfully. Please login to proceed',
      data: user
    });
  } catch (err: any) {
    console.log("EGG", res.statusMessage)
    return res.status(500).json({ error: { message: err.message } });
  }
};
