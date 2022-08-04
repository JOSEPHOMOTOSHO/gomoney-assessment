import { app } from "../../src/app"
import request from "supertest"
import * as users from "../mocks/userData"
import { dbConnect, dbDisconnect } from "../../src/utils/test-utils/dbHandler.utils"
require("dotenv").config()

const signupUrl = '/api/v1/signup';
const loginUrl = '/api/v1/login';

beforeAll(async () => {
    await dbConnect()
});

afterAll(async () => {
    await dbDisconnect()
});

describe('E2E User registration', () => {
    it('should create a user successfully when valid inputs are supplied', async () => {
        const res = await request(app)
            .post(signupUrl)
            .send(users.mockUserData);
        expect(res.status).toBe(201);
        expect(Object.keys(res.body.data).includes('userType')).toBeTruthy();
        expect(res.body.data.userType).not.toBe('');
    });

    it('should throw an error when email is missing', async () => {
        const res = await request(app)
            .post(signupUrl)
            .send(users.mockUserWithoutMail);
        expect(res.body.error.message[0]).toBe('\"email\" is required');
        expect(res.status).toBe(400);
    });

    it('should throw an error when username is missing', async () => {
        const res = await request(app)
            .post(signupUrl)
            .send(users.mockUserWithoutUsername);
        expect(res.body.error.message[0]).toBe('\"username\" is required');
        expect(res.status).toBe(400);
    });

    it('should throw an error when password is missing', async () => {
        const res = await request(app)
            .post(signupUrl)
            .send(users.mockUserWithoutPassword);
        expect(res.body.error.message[0]).toBe('\"password\" is required');
        expect(res.status).toBe(400);
    });
})

describe('E2E User Login', () => {
    it('should login a user successfully when valid inputs are supplied', async () => {
        const res = await request(app)
            .post(loginUrl)
            .send(users.mockUserDataLogin);
        expect(res.status).toBe(200);
        expect(Object.keys(res.body.data).includes('token')).toBeTruthy();
        expect(res.body.data.token).not.toBe('');
    });

    it('should throw an error when email is missing', async () => {
        const res = await request(app)
            .post(loginUrl)
            .send(users.mockUserDataLoginNoMail);
        expect(res.status).toBe(400);
        expect(res.body.error.message[0]).toBe('\"email\" is required');
    });

    it('should throw an error when an invalid email is passed', async () => {
        const res = await request(app)
            .post(loginUrl)
            .send(users.mockInvalidMail);
        expect(res.status).toBe(400);
        expect(res.body.error.message[0]).toBe('\"email\" must be a valid email');
    });

    it('should throw an error when password is missing', async () => {
        const res = await request(app)
            .post(loginUrl)
            .send(users.mockUserDataNoPassword);
        expect(res.status).toBe(400);
        expect(res.body.error.message[0]).toBe('\"password\" is required');
    });

    it('should throw an error when the password passed is wrong', async () => {
        const res = await request(app)
            .post(loginUrl)
            .send(users.mockUserDataInvalidLogin);
        expect(res.status).toBe(401);
        expect(res.body.message).toBe("Invalid login details");
    });

    it('should throw an error when the email passed is wrong', async () => {
        const res = await request(app)
            .post(loginUrl)
            .send(users.mockUserDataInvalidMail);
        expect(res.status).toBe(401);
        expect(res.body.message).toBe("User Not found");
    });
})


