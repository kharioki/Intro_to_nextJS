import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open<sqlite3.Database, sqlite3.Statement>({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });

  // update user
  if (req.method === 'PUT') {
    const statement = await db.prepare(
      'UPDATE person SET name= ?, email= ?, where id= ?'
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
    // result.finalize();
  }

  // fetch person from db by req.query.id
  const person = await db.get('SELECT * FROM person where id = ?', [
    req.query.id
  ]);

  res.json(person);
}
