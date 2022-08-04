import { Team } from '../src/models/team';
import { mockTeamData1 } from "./mocks/teamData"
import { dbConnect, dbDisconnect } from "../src/utils/test-utils/dbHandler.utils"

beforeAll(async () => await dbConnect());
afterAll(async () => await dbDisconnect());


describe('Unit tests for CRUD of a team', () => {
    it('Should create a new team successfully', async () => {
        const newTeam = await Team.create(mockTeamData1);
        const teamCount = await Team.countDocuments();

        expect(teamCount).toEqual(1);
        expect(newTeam.teamName).toEqual(mockTeamData1.teamName);
    });

    it('Should get all teams', async () => {
        const teams = await Team.find();
        const teamCount = await Team.countDocuments();
        expect(teamCount).toEqual(1);
        expect(Array.isArray(teams)).toBe(true);
    });

    it('Should update a team', async () => {
        const teams = await Team.find({});
        await Team.updateOne({ _id: teams[0]._id }, { teamName: 'Brentford' });
        const updatedTeam = await Team.findById(teams[0]._id);
        expect(updatedTeam?.teamName).toEqual('Brentford');
    });

    it('Should delete a team', async () => {
        const teams = await Team.find({});
        await Team.deleteOne({ _id: teams[0]._id });
        const currentCount = await Team.countDocuments();
        expect(currentCount).toEqual(0);
    });
})