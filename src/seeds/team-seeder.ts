import { Types } from 'mongoose';
import { Team } from '../models/';

const teams = [
  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6960'),
    teamName: 'Tottenham Hotspur',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6961'),
    teamName: 'Southampton',

  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6962'),
    teamName: 'Leicester City',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6963'),
    teamName: 'Leeds United',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6964'),
    teamName: 'Everton',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6965'),
    teamName: 'Crystal Palace',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6966'),
    teamName: 'Chelsea',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6967'),
    teamName: 'Manchester United',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6968'),
    teamName: 'Burnley',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6969'),
    teamName: 'Brighton & Hove Albion',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6970'),
    teamName: 'Brentford',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6971'),
    teamName: 'Aston Villa',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6972'),
    teamName: 'Arsenal',
  }),

  new Team({
    _id: new Types.ObjectId('5d7397916de21e04974c6973'),
    teamName: 'AFC Bournemouth',
  }),
];

export default teams;
