import { Request, Response } from "express";
import * as randomService from "../services/random-service";
import httpStatus from "http-status";
import { connection } from "../database/database"

export async function getRandom(req: Request, res: Response){
    const person = await connection.query(`SELECT * FROM users`)
    try {
        if (person) {
          res.status(httpStatus.OK).send(person);
        } else {
          res.status(httpStatus.NOT_FOUND).send({ error: 'Person not found' });
        }
      } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
      }
}