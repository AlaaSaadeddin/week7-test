BEGIN;

DROP TABLE IF EXISTS cities ;

CREATE TABLE cities (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(100) NOT NULL ,
    city VARCHAR(100) NOT NULL
);
INSERT INTO cities (name , city) VALUES
('Alaa' , 'Gaza'),
('Ahmed' , 'Cairo'),
('Amal' , 'Tokyo' );

COMMIT;
