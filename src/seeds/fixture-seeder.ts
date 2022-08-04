import { Fixture } from '../models';
import { Types } from "mongoose"

const fixtures = [
  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6972"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6971"),
    homeTeamScore: 0,
    awayTeamScore: 0,
    fixtureDate: "2022-10-07T00:00:00.000Z",
    status: "pending",
    fixtureLink: "aaae6749-d9cb-4fd3-be5e-e117066bdcfe",
    _id: new Types.ObjectId("62eb596eedc57543f3c9220d")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6961"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6962"),
    homeTeamScore: 2,
    awayTeamScore: 3,
    fixtureDate: "2022-11-04T00:00:00.000Z",
    status: "completed",
    fixtureLink: "1455509c-0728-468a-8259-ef0c9bf998be",
    _id: new Types.ObjectId("62eb5d4fae78477803013607")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6963"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6964"),
    homeTeamScore: 5,
    awayTeamScore: 3,
    fixtureDate: "2022-10-04T00:00:00.000Z",
    status: "completed",
    fixtureLink: "0e3054dc-5818-429f-be6e-6626bf667544",
    _id: new Types.ObjectId("62eb5d4fae78477803013608")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6965"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6966"),
    homeTeamScore: 0,
    awayTeamScore: 0,
    fixtureDate: "2022-10-04T12:04:00.000Z",
    status: "pending",
    fixtureLink: "55dcd5bb-4929-4eef-867b-5218c11d7939",
    _id: new Types.ObjectId("62eb5d4fae78477803013609")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6967"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6964"),
    homeTeamScore: 0,
    awayTeamScore: 0,
    fixtureDate: "2022-10-04T11:04:00.000Z",
    status: "pending",
    fixtureLink: "ce1864aa-c6dd-4b49-91c0-97a52c424e53",
    _id: new Types.ObjectId("62eb5d4fae7847780301360a")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6960"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6965"),
    homeTeamScore: 2,
    awayTeamScore: 2,
    fixtureDate: "2022-10-03T11:04:00.000Z",
    status: "completed",
    fixtureLink: "052621ad-a17b-45c1-be34-5973ded6a773",
    _id: new Types.ObjectId("62eb5d4fae7847780301360b")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6964"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6965"),
    homeTeamScore: 3,
    awayTeamScore: 1,
    fixtureDate: "2022-10-03T11:04:00.000Z",
    status: "pending",
    fixtureLink: "5f3ac437-c4ef-4722-bc92-f64ac1a9bdaa",
    _id: new Types.ObjectId("62eb5d4fae7847780301360c")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6967"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6968"),
    homeTeamScore: 5,
    awayTeamScore: 2,
    fixtureDate: "2022-10-09T01:04:00.000Z",
    status: "completed",
    fixtureLink: "54533301-1367-4497-a004-2ea9396d3e75",
    _id: new Types.ObjectId("62eb5d4fae7847780301360d")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6969"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6970"),
    homeTeamScore: 0,
    awayTeamScore: 0,
    fixtureDate: "2022-11-08T11:04:00.000Z",
    status: "completed",
    fixtureLink: "dd43d7b3-8514-4aeb-9c22-44619f934552",
    _id: new Types.ObjectId("62eb5d4fae78477803013616")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6967"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6972"),
    homeTeamScore: 4,
    awayTeamScore: 2,
    fixtureDate: "2022-11-03T11:04:00.000Z",
    status: "completed",
    fixtureLink: "b86e7d0f-d3b4-4041-a915-2381128aaad8",
    _id: new Types.ObjectId("62eb5d4fae78477803013615")
  }),


  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6970"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6966"),
    homeTeamScore: 0,
    awayTeamScore: 0,
    fixtureDate: "2022-11-09T11:04:00.000Z",
    status: "pending",
    fixtureLink: "29e2a6f4-7952-4e15-9817-0131948b2595",
    _id: new Types.ObjectId("62eb5d4fae78477803013614"),
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6968"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6964"),
    homeTeamScore: 4,
    awayTeamScore: 2,
    fixtureDate: "2022-10-03T11:04:00.000Z",
    status: "completed",
    fixtureLink: "9bf8756d-64a8-4ab8-a8c9-11be68c47958",
    _id: new Types.ObjectId("62eb5d4fae78477803013613")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6966"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6971"),
    homeTeamScore: 1,
    awayTeamScore: 1,
    fixtureDate: "2022-12-03T11:04:00.000Z",
    status: "completed",
    fixtureLink: "09f0d4bb-42d3-4c98-9c02-41858e2b9086",
    _id: new Types.ObjectId("62eb5d4fae78477803013612")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6966"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6961"),
    homeTeamScore: 0,
    awayTeamScore: 0,
    fixtureDate: "2022-11-03T11:04:00.000Z",
    status: "pending",
    fixtureLink: "e2306702-d569-495e-a18c-fb83f2fa6d25",
    _id: new Types.ObjectId("62eb5d4fae78477803013611")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("5d7397916de21e04974c6960"),
    awayTeam: new Types.ObjectId("5d7397916de21e04974c6965"),
    homeTeamScore: 2,
    awayTeamScore: 5,
    fixtureDate: "2022-10-03T11:04:00.000Z",
    status: "pending",
    fixtureLink: "ac1c7654-5d0d-4dc0-93c6-3793f57cc864",
    _id: new Types.ObjectId("62eb5d4fae78477803013610")
  }),

  new Fixture({
    homeTeam: new Types.ObjectId("62eb5870a9a40832c7eb36b0"),
    awayTeam: new Types.ObjectId("62eb29697d23e51929ec7210"),
    homeTeamScore: 0,
    awayTeamScore: 0,
    fixtureDate: "2022-09-03T00:00:00.000Z",
    status: "pending",
    fixtureLink: "cf3cf4f6-e58f-4743-9861-59b6ca54f02b",
    _id: new Types.ObjectId("62eb589ba9a40832c7eb36b8")
  }),
];

export default fixtures;
