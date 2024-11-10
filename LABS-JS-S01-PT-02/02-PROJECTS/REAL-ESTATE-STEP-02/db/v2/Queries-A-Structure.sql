SHOW DATABASES;
CREATE DATABASE rdkjswev2;
USE rdkjswev2;

CREATE TABLE Roles(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	role VARCHAR( 50 ) NOT NULL DEFAULT "standard",
-- 	role ENUM( "sysadmin", "admin", "standard" ) NOT NULL DEFAULT "standard"

	UNIQUE( role )
);

CREATE TABLE PropertyTypes(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	propertytype VARCHAR( 255 ) NOT NULL,
-- 	propertytype ENUM( "building", "house", "apartment", "room", "parking lot", "parking drawer", "other" ) NOT NULL

	UNIQUE( propertytype )
);

CREATE TABLE Properties(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	available BOOLEAN NOT NULL DEFAULT TRUE,
	property VARCHAR( 255 ) NOT NULL,
	room INT( 11 ) UNSIGNED,
	location JSON NOT NULL,
	street_type VARCHAR( 255 ) NOT NULL,
	street_name VARCHAR( 255 ) NOT NULL,
	street_number VARCHAR( 255 ) NOT NULL,
	colony VARCHAR( 255 ) NOT NULL,
	alcaldy VARCHAR( 255 ) NOT NULL,
	postal_code VARCHAR( 5 ) NOT NULL,
	city VARCHAR( 255 ) NOT NULL,
	state VARCHAR( 255 ) NOT NULL,
	price INT( 11 ) NOT NULL,
	
	property_type_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( property_type_id ) REFERENCES PropertyTypes( id )
);

CREATE TABLE Users(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR( 255 ) NOT NULL,
	password VARCHAR( 255 ) NOT NULL,
	lada VARCHAR( 5 ) NOT NULL,
	phone VARCHAR( 10 ) NOT NULL,
	email VARCHAR( 50 ) NOT NULL,
	
	UNIQUE( email ),
	role_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( role_id ) REFERENCES Roles( id )
);

CREATE TABLE Pictures(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	picture VARCHAR( 50 ) NOT NULL,
	description VARCHAR( 255 ) DEFAULT "",
	
	property_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( property_id ) REFERENCES Properties( id ) 
);

CREATE TABLE Favorites(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	
	user_id INT( 11 ) UNSIGNED NOT NULL,
	property_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( user_id ) REFERENCES Users( id ),
	FOREIGN KEY( property_id ) REFERENCES Properties( id ) 
);

