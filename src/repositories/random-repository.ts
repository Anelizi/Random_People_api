import { connection } from "database/database";

export async function getRandom(id: number){
    const result = await connection.query('SELECT * FROM people WHERE id = $1', [id]);
   return result;
}