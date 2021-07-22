DROP DATABASE IF EXISTS colchis;
CREATE DATABASE colchis;

USE colchis;

CREATE TABLE `assets` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150),  
  `number` INT,
  `worth` INT
);

CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150),  
  `email` VARCHAR(150)
);

CREATE TABLE `message` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `content` TEXT(500),  
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT,
  CONSTRAINT FK_user_message FOREIGN KEY (user_id)
    REFERENCES user(id)
);
