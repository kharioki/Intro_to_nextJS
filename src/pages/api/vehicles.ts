import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });

  // fetch people from db
  const vehicles = await db.all('SELECT * FROM vehicle');

  res.json(vehicles);
}
