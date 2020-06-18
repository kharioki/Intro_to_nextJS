import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function getAllVehiclesByPersonId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });

  // fetch vehicles from db by person id
  const vehicles = await db.all('SELECT * FROM vehicle where ownerId = ?', [
    req.query.id
  ]);

  res.json(vehicles);
}
