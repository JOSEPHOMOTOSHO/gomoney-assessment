import { User } from '../models';

const users = [
  new User({
    _id: '5d4155cfcd68f4086d8df490',
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'password',
    userType: "USER",
  }),

  new User({
    _id: '5d4155cfcd68f4086d8df491',
    username: 'user',
    email: 'user@gmail.com',
    password: 'password',
    userType: "ADMIN",
  }),
];

export default users;
