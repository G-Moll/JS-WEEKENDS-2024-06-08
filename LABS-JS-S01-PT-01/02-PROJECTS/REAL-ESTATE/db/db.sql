CREATE DATABASE rdk_js_weekends;
USE rdk_js_weekends;

CREATE TABLE draftproperties(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	available BOOLEAN DEFAULT TRUE,
	property VARCHAR( 255 ) NOT NULL,
	location BOOLEAN NOT NULL,
	price INT( 11 ) NOT NULL
);

INSERT INTO draftproperties VALUES ( NULL, DEFAULT, "Aparment E&R 2024", true, 20000 );
INSERT INTO draftproperties VALUES ( NULL, DEFAULT, "New Aparment E&R 2025", true, 8000 );
INSERT INTO draftproperties VALUES ( NULL, DEFAULT, "Tiny House E&R 2025", true, 28000 );
INSERT INTO draftproperties VALUES ( NULL, DEFAULT, "Bedroom", false, 6000 );
INSERT INTO draftproperties VALUES ( NULL, DEFAULT, "Parking lot", false, 380000 );

SELECT * FROM draftproperties;


SHOW TABLES;
DESCRIBE  draftproperties;
-- DROP TABLE draftproperties;