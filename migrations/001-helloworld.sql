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
--- insert into people
INSERT INTO Person (name, email)
values
  ('Tony', 'tony@stark.com');
INSERT INTO Person (name, email)
values
  ('June', 'june@stark.com');
--- insert into vehicles
INSERT INTO Vehicle (brand, model, ownerId)
values('Mercedes', 'AMG', 1);
INSERT INTO Vehicle (brand, model, ownerId)
values('Hummer', 'H6', 2);
INSERT INTO Vehicle (brand, model, ownerId)
values('Mercedes', 'G-wagon', 1);
-- Down
  DROP TABLE Person;
DROP TABLE Vehicle;