CREATE DATABASE pedalboard;

CREATE TABLE equipment(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL,
    description TEXT,
    picture_url VARCHAR(255),
    brand VARCHAR(50),
    model VARCHAR(50) 
);