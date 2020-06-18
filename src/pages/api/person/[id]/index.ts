import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });

  // fetch person from db by req.query.id
  const person = await db.get('SELECT * FROM person where id = ?', [
    req.query.id
  ]);

  res.json(person);
}
