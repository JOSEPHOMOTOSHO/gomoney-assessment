import { app } from "../../src/app"
import request from "supertest"
import { mockAdmin, mockUser } from "../mocks/userData"
import * as teams from "../mocks/teamData"
import { User, Team } from '../../src/models';
import { dbConnect, dbDisconnect } from "../../src/utils/test-utils/dbHandler.utils";
import { generateToken } from '../../src/middlewares/authentication';
require("dotenv").config()

const teamsUrl = '/api/v1/team';

let userToken: any;
let adminToken: any;

beforeAll(async () => {
    await dbConnect()
    const users = await User.insertMany([mockAdmin, mockUser]);
    adminToken = generateToken(users[0].toObject());
    userToken = generateToken(users[1].toObject());
});

afterAll(async () => {
    await dbDisconnect()
});

describe('E2E Team creation', () => {
    it('should throw an error when a token is not present in the request header', async () => {
        const res = await request(app)
            .post(teamsUrl)
            .send(teams.mockTeamData);
        expect(res.status).toBe(403);
        expect(res.body.message).toBe('No Token');
    });

    it('should throw an error when the user making the request does not have admin rights', async () => {
        const res = await request(app)
            .post(teamsUrl)
            .set('authorization', `Bearer ${userToken}`)
            .send(teams.mockTeamData);
        expect(res.status).toBe(403);
    });

    it('should create a team successfully when valid inputs are supplied', async () => {
        const res = await request(app)
            .post(teamsUrl)
            .set('authorization', `Bearer ${adminToken}`)
            .send(teams.mockTeamData);
        expect(res.status).toBe(201);
        expect(Object.keys(res.body.data).includes('teamName')).toBeTruthy();
    });

    it('should throw an error when the team is existing already', async () => {
        const res = await request(app)
            .post(teamsUrl)
            .set('authorization', `Bearer ${adminToken}`)
            .send(teams.mockTeamData);
        expect(res.status).toBe(409);
        expect(res.body.message).toBe("Team already in the premier league");
    });

    it('should throw an error when the team name is missing', async () => {
        const res = await request(app)
            .post(teamsUrl)
            .set('authorization', `Bearer ${adminToken}`)
            .send({});
        expect(res.status).toBe(400);
        expect(res.body.error.message[0]).toBe('\"teamName\" is required');
    });

    it('should throw an error when you create without right privilege', async () => {
        const res = await request(app)
            .post(teamsUrl)
            .set('authorization', `Bearer ${userToken}`)
            .send(teams.mockTeamData);
        expect(res.status).toBe(403);
        expect(res.body.message).toBe("You are not authorized to perform this action");
    });
});

describe('E2E Fetch all teams', () => {
    it('should throw an error when a token is not present in the request header', async () => {
        const res = await request(app).get(teamsUrl);

        expect(res.status).toBe(403);
        expect(res.body.message).toBe('No Token');
    });

    it('should fetch all teams', async () => {
        const res = await request(app)
            .get(teamsUrl)
            .set('authorization', `Bearer ${userToken}`);
        expect(res.status).toBe(200);
        expect(res.body.data.teams.length).toBeGreaterThan(0);
    });
});

describe('E2E Team Update', () => {
    let team: any;
    const updatePayload = {
        teamName: 'Aston Villa',
    };

    it('should throw an error when a token is not present in the request header', async () => {
        team = await Team.findOne();
        console.log("yam", team)
        const res = await request(app)
            .put(`${teamsUrl}/${team._id}`)
            .send(updatePayload);
        expect(res.status).toBe(403);
        expect(res.body.message).toBe('No Token');
    });

    it('should throw an error when the user making the request does not have admin rights', async () => {
        const res = await request(app)
            .put(`${teamsUrl}/${team._id}`)
            .set('authorization', `Bearer ${userToken}`)
            .send(updatePayload);
        expect(res.status).toBe(403);
    });

    it('should update a team successfully when valid inputs are supplied', async () => {
        const res = await request(app)
            .put(`${teamsUrl}/${team._id}`)
            .set('authorization', `Bearer ${adminToken}`)
            .send(updatePayload);
        expect(res.status).toBe(200);
        expect(Object.keys(res.body.data).includes('teamName')).toBeTruthy();

    });

    it('should throw an error when the teamId passed is not a valid MongoDB ObjectId', async () => {
        const res = await request(app)
            .put(`${teamsUrl}/ewa`)
            .set('authorization', `Bearer ${adminToken}`)
            .send(updatePayload);
        expect(res.status).toBe(400);
    });
});

describe('E2E Fetch a single team', () => {
    let team: any;
    it('should throw an error when a token is not present in the request header', async () => {
        team = await Team.findOne();
        const res = await request(app).get(`${teamsUrl}/${team._id}`);
        expect(res.status).toBe(403);
        expect(res.body.message).toBe('No Token');
    });

    it('should fetch a team successfully', async () => {
        const res = await request(app)
            .get(`${teamsUrl}/${team._id}`)
            .set('authorization', `Bearer ${userToken}`);

        expect(res.status).toBe(200);
        expect(res.body.data.teamName).toBe(team.teamName);
    });

    it('should return a 404 response when the team cannot be found', async () => {
        const res = await request(app)
            .get(`${teamsUrl}/62eb0cb5fa34e341f4db2b84`)
            .set('authorization', `Bearer ${userToken}`);
        expect(res.status).toBe(403);
        expect(res.body.message).toBe("No Such Team in the premier league");
    });

    it('should return a 422 response when the teamId passed is not a valid mongodb objectId', async () => {
        const res = await request(app)
            .get(`${teamsUrl}/ewa`)
            .set('authorization', `Bearer ${userToken}`);
        expect(res.status).toBe(400);
    });
});

describe('E2E Delete a team', () => {
    let team: any;
    it('should throw an error when a token is not present in the request header', async () => {
        team = await Team.findOne();
        const res = await request(app).delete(`${teamsUrl}/${team._id}`);
        expect(res.status).toBe(403);
        expect(res.body.message).toBe('No Token');
    });

    it('should delete a team successfully', async () => {
        const res = await request(app)
            .delete(`${teamsUrl}/${team._id}`)
            .set('authorization', `Bearer ${adminToken}`);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Team deleted successfully")
    });

    it('should return a 403 response if the user does not have admin privileges', async () => {
        const res = await request(app)
            .delete(`${teamsUrl}/${team._id}`)
            .set('authorization', `Bearer ${userToken}`);
        expect(res.status).toBe(403);
    });

    it('should return a 404 response when the team cannot be found', async () => {
        const res = await request(app)
            .delete(`${teamsUrl}/5e1b70de48bd99411c09389e`)
            .set('authorization', `Bearer ${adminToken}`);

        expect(res.status).toBe(404);
        expect(res.body.message).toBe("Team doesnt exist in the premier league");
    });

    it('should return a 400 response when the teamId passed is not a valid mongodb objectId', async () => {
        const res = await request(app)
            .delete(`${teamsUrl}/ewa`)
            .set('authorization', `Bearer ${adminToken}`);
        expect(res.status).toBe(400);
    });
});