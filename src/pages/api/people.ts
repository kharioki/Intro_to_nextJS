import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });

  // fetch people from db
  const people = await db.all('SELECT * FROM person');

  res.json(people);
}
