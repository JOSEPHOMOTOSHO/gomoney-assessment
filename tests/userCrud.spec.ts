import { User } from '../src/models/user';
import { mockUserData } from "./mocks/userData"
import { dbConnect, dbDisconnect } from "../src/utils/test-utils/dbHandler.utils"

beforeAll(async () => await dbConnect());
afterAll(async () => await dbDisconnect());


describe('Unit tests for CRUD of a user', () => {
    it('Should create a new user successfully', async () => {
        const newUser = await User.create(mockUserData);
        const userCount = await User.countDocuments();

        expect(userCount).toEqual(1);
        expect(newUser.username).toEqual('dammy');
        expect(newUser.email).toEqual('dammy@user.com');
        expect(newUser.password).toEqual('cassava');
        expect(newUser.userType).toEqual('ADMIN');
    });
    it('Should get all users', async () => {
        const users = await User.find({});
        const userCount = await User.countDocuments();
        expect(userCount).toEqual(1);
        expect(Array.isArray(users)).toBe(true);
    });

    it('Should update a user', async () => {
        const users = await User.find({});
        await User.updateOne(
            { _id: users[0]._id },
            { username: 'Dammy Updated' },
        );
        const updatedUser = await User.findById(users[0]._id);
        expect(updatedUser?.username).toEqual('Dammy Updated');
    });

    it('Should delete a user', async () => {
        const users = await User.find({});
        await User.deleteOne({ _id: users[0]._id });
        const currentCount = await User.countDocuments();
        expect(currentCount).toEqual(0);
    });
})