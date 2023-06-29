import { Router } from "express";
import * as randomController from  "../controllers/random-controller"

const randomPeopleRouter = Router();

randomPeopleRouter.get("/person", randomController.getRandom);

export default randomPeopleRouter;