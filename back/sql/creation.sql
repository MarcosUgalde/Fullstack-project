DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS sets;
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL, 
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS workouts (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    creator_id uuid NOT NULL REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sets (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    set_name TEXT NOT NULL,
    reps INTEGER,
    rest_time INTEGER,
    workout_id uuid NOT NULL REFERENCES workouts
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS exercises (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    duration TEXT NOT NULL,
    set_id uuid NOT NULL REFERENCES sets
        ON UPDATE CASCADE
        ON DELETE CASCADE
);