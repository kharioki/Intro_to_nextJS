-- Up
CREATE TABLE Person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);
CREATE TABLE Vehicle (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  ownerId INTEGER REFERENCES Person(id)
);
INSERT INTO Person (name, email)
values
  ('Tony', 'tony@stark.com');
INSERT INTO Person (name, email)
values
  ('June', 'june@stark.com');
INSERT INTO Vehicle (brand, model, ownerId)
values('Mercedes', 'AMG', 1);
INSERT INTO Vehicle (brand, model, ownerId)
values('Hummer', 'H6', 2);
-- Down
  DROP TABLE Person;
DROP TABLE Vehicle;