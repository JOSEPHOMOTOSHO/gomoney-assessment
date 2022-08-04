import bcrypt from 'bcryptjs';
import { FixtureInfo, StatusType } from '../types';

export const hashedPassword = (password: string) => bcrypt.hash(password, 8);

export const comparePassword = (input: string, password: string) => bcrypt.compare(input, password);


export const playMatch = (fixture: FixtureInfo) => {
  fixture.awayTeamScore = Math.floor(Math.random() * 10) + 1;
  fixture.homeTeamScore = Math.floor(Math.random() * 10) + 1;
  fixture.status = StatusType.COMPLETED
  fixture.fixtureDate = new Date()
}

