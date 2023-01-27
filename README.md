# Furniture-Store
ReactJS, PHP-

SCHEMA

BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "DB_user" (
	"user_id"	INTEGER NOT NULL,
	"user_name"	varchar(100),
	"user_email"	varchar(100),
	"user_pwd"	varchar(255),
	PRIMARY KEY("user_id")
);
CREATE TABLE IF NOT EXISTS "DB_furniture" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	varchar(100) NOT NULL,
	"title"	varchar(50) NOT NULL,
	"price"	INTEGER NOT NULL,
	"description"	TEXT NOT NULL,
	"type"	varchar(20) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "DB_cart" (
	"id"	INTEGER NOT NULL UNIQUE,
	"user_id"	varchar(255) NOT NULL,
	"furniture_id"	varchar(255) NOT NULL,
	"type"	varchar(50) NOT NULL,
	"quantity"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "DB_user" VALUES (2,'elin','elin@gmail.com','123');
INSERT INTO "DB_user" VALUES (3,'peppe','peppe@gmail.com','$2y$10$Wb3Ljk1dbm3nzuMwdzYv7.iB2CoKCFRvtFdZ/BXyK5NHb8222JUee');
INSERT INTO "DB_furniture" VALUES (1,'Healthiswealth','Comforter',1000,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','beds');
INSERT INTO "DB_furniture" VALUES (2,'Healthy','Comforter',800,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','beds');
INSERT INTO "DB_furniture" VALUES (3,'Incredibed','Deluxe Bed',500,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','beds');
INSERT INTO "DB_furniture" VALUES (4,'Kingcharles','Imposter',1000,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','beds');
INSERT INTO "DB_furniture" VALUES (5,'Pastrami','Stunning',1000,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','beds');
INSERT INTO "DB_furniture" VALUES (6,'Gunnar','B&B Collection',100,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','sofas');
INSERT INTO "DB_furniture" VALUES (7,'Hambert','B&B Collection',800,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','sofas');
INSERT INTO "DB_furniture" VALUES (8,'Modernerik','B&B Collection',600,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','sofas');
INSERT INTO "DB_furniture" VALUES (9,'Rola','B&B Collection',400,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','sofas');
INSERT INTO "DB_furniture" VALUES (10,'Space','B&B Collection',500,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','sofas');
INSERT INTO "DB_furniture" VALUES (11,'Authentic','Intriguing',1000,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','chairs');
INSERT INTO "DB_furniture" VALUES (12,'Classic','Fatigue',500,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','chairs');
INSERT INTO "DB_furniture" VALUES (13,'Color','Crecent',800,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','chairs');
INSERT INTO "DB_furniture" VALUES (14,'Future','Paradox',900,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','chairs');
INSERT INTO "DB_furniture" VALUES (15,'Present','Belligirent',1200,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus','chairs');
INSERT INTO "DB_cart" VALUES (67,'3','9','sofas',2);
INSERT INTO "DB_cart" VALUES (68,'3','13','chairs',2);
INSERT INTO "DB_cart" VALUES (69,'3','14','chairs',3);
INSERT INTO "DB_cart" VALUES (70,'3','10','sofas',9);
COMMIT;
