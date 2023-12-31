CREATE TABLE "koalas"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(30) NOT NULL,
"gender" VARCHAR(10) NOT NULL,
"age" INTEGER, 
"ready_to_transfer" BOOLEAN,
"notes" VARCHAR(180) NOT NULL
);

INSERT INTO "koalas" 
("name", "gender", "age", "ready_to_transfer", "notes")
VALUES 
('Scotty', 'M', 4, TRUE, 'Born in Guatemala'),
('Jean', 'F', 5, TRUE, 'Allergic to lots of lava'),
('Ororo', 'F', 7, FALSE, 'Loves listening to Paula (Abdul)'), 
('Logan', 'M', 15, FALSE, 'Loves the sauna'),
('Charlie', 'M', 9, TRUE, 'Favorite band is Nirvana'),
('Betsy', 'F', 4, TRUE, 'Has a pet iguana');