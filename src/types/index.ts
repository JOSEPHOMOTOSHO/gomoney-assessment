import mongoose from 'mongoose';

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER"
}

export enum TeamNameType {
  AFCBOURNEMOUTH = "AFC Bournemouth",
  ARSENAL = "Arsenal",
  ASTONVILLA = "Aston Villa",
  BRENTFORD = "Brentford",
  BRIGHTONANDHOVEALBION = "Brighton & Hove Albion",
  BURNLEY = "Burnley",
  CHELSEA = "Chelsea",
  CRYSTALPALACE = "Crystal Palace",
  EVERTON = "Everton",
  LEEDSUNITED = "Leeds United",
  LEICESTERCITY = "Leicester City",
  LIVERPOOL = "Liverpool",
  MANCHESTERCITY = "Manchester City",
  MANCHESTERUNITED = "Manchester United",
  NEWCASTLEUNITED = "Newcastle United",
  NORWICHCITY = "Norwich City",
  SOUTHAMPTON = "Southampton",
  TOTTENHAMHOTSPUR = "Tottenham Hotspur",
  WATFORD = "Watford",
  WESTHAMUNITED = "West Ham United",
  WOLVERHAMPTONWANDERERS = "Wolverhampton Wanderers"
}

export enum StatusType {
  COMPLETED = "completed",
  PENDING = "pending"
}
export interface UserInfo {
  email: string;
  password: string;
  username: string;
  userType: UserType
  createdAt: Date;
  updatedAt: Date

}


export interface FixtureInfo {
  homeTeam: mongoose.Types.ObjectId,
  awayTeam: mongoose.Types.ObjectId,
  homeTeamScore: number,
  awayTeamScore: number,
  fixtureDate: Date,
  status: StatusType
  fixtureLink: string
}
export type UserInput = mongoose.Document<unknown, any, UserInfo> &
  UserInfo & {
    _id: mongoose.Types.ObjectId;
  };

export interface TeamInfo {
  teamName: TeamNameType
}
