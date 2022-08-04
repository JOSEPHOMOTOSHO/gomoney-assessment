import express from 'express';
import {
  signUp,
  login,
  addTeam,
  deleteTeam,
  addFixture,
  getFixtures,
  updateFixture,
  getTeam,
  getFixture,
  deleteFixture,
  playFixture,
  searchFixture,
  searchTeam,
  getCompletedFixtures,
  getPendingFixtures,
  getTeams,
  editTeam
} from './controllers';
import { isLoggedIn, isAdmin, limiter } from './middlewares';

const router = express.Router();

/* GET home page. */
router.get('/', (_req, res) => {
  res.json({ title: 'Sample Test Progress' });
});

router
  .post('/signup', signUp)
  .post('/login', login)
  .post("/team", isLoggedIn, isAdmin, addTeam)
  .post("/fixture", isLoggedIn, isAdmin, addFixture)


  .put("/fixture/:fixtureId", isLoggedIn, isAdmin, updateFixture)
  .put("/fixture/:fixtureId/play", playFixture)
  .put("/team/:teamId/", isLoggedIn, isAdmin, editTeam)


  .get('/fixture', isLoggedIn, limiter, getFixtures)
  .get("/fixture/search", isLoggedIn, limiter, searchFixture)
  .get("/fixture/complete", isLoggedIn, limiter, getCompletedFixtures)
  .get("/fixture/pending", isLoggedIn, limiter, getPendingFixtures)
  .get("/team", isLoggedIn, limiter, getTeams)
  .get("/team/search", searchTeam)
  .get("/team/:teamId", isLoggedIn, limiter, getTeam)
  .get('/fixture/:fixtureId', isLoggedIn, limiter, getFixture)

  .delete('/team/:teamId', isLoggedIn, isAdmin, deleteTeam)
  .delete('/fixture/:fixtureId', isLoggedIn, isAdmin, deleteFixture)



export = router;
