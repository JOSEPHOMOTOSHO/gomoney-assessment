import UserSeeder from './user-seeder';
import TeamSeeder from './team-seeder';
import FixtureSeeder from './fixture-seeder';
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(`${process.env.MONGODB_URI}`);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully!');
});

const seederModules: any = [...UserSeeder, ...TeamSeeder, ...FixtureSeeder];
const seederModulesLength = seederModules.length;

let counter = 0;

for (let index = 0; index < seederModulesLength; index++) {
  seederModules[index].save((error: any, _result: any) => {
    if (error) {
      console.log(error);
    }

    counter++;

    if (counter === seederModulesLength) {
      mongoose.disconnect();
    }
  });
}
