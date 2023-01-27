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

COMMIT;
