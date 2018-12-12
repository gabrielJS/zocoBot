CREATE DATABASE zocobot;
USE zocobot

CREATE TABLE `frases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `frase` varchar(1000) NOT NULL,
  `autor` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

INSERT INTO frases (frase, autor) VALUES('Test', 'User Test');
