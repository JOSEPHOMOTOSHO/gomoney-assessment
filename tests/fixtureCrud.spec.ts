import { Fixture } from '../src/models/fixture';
import { fixtureMockData1 } from "./mocks/fixtureData"
import { dbConnect, dbDisconnect } from "../src/utils/test-utils/dbHandler.utils"

beforeAll(async () => await dbConnect());
afterAll(async () => await dbDisconnect());


describe('Unit tests for CRUD of fixture', () => {
    it('Should create a new fixture successfully', async () => {
        const newFixture = await Fixture.create(fixtureMockData1);
        const fixtureCount = await Fixture.countDocuments();
        expect(fixtureCount).toEqual(1);
        expect(newFixture.homeTeam).toEqual(fixtureMockData1.homeTeam);
        expect(newFixture.fixtureDate).toEqual(new Date(fixtureMockData1.fixtureDate));
        expect(newFixture.fixtureLink).toEqual(fixtureMockData1.fixtureLink);
    });

    it('Should get all fixures', async () => {
        const fixtures = await Fixture.find({});
        const fixturesCount = await Fixture.countDocuments();
        expect(fixturesCount).toEqual(1);
        expect(Array.isArray(fixtures)).toBe(true);
    });

    it('Should update a fixture', async () => {
        const fixtures = await Fixture.find({});
        await Fixture.updateOne(
            { _id: fixtures[0]._id },
            { status: 'completed' },
        );
        const updatedFixture = await Fixture.findById(fixtures[0]._id);
        expect(updatedFixture?.status).toEqual('completed');
    });

    it('Should delete a fixture', async () => {
        const fixtures = await Fixture.find({});
        await Fixture.deleteOne({ _id: fixtures[0]._id });
        const currentCount = await Fixture.countDocuments();
        expect(currentCount).toEqual(0);
    });
});