CREATE DATABASE zocobot;
USE zocobot

CREATE TABLE `frases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `frase` varchar(1000) NOT NULL,
  `autor` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

INSERT INTO frases (frase, autor) VALUES('Yo de verdad creo que salgo con ella Y me quedo', 'Geovanni Andreotti');
INSERT INTO frases (frase, autor) VALUES('cata salazar me mando un pack, pero no lo muestro, pa que tan chato', 'Javier Vergara');
INSERT INTO frases (frase, autor) VALUES('Yo jugaba a la gran capital solo xdd', 'Geovanni Andreotti');
INSERT INTO frases (frase, autor) VALUES('voy a guardar este momento, si en un año pasa lo mismo con got, me van a chupar el pico todos los culiaos', 'Gabriel Jiménez');
INSERT INTO frases (frase, autor) VALUES('y en todo caso, le dije "andai chistoso" no mas', 'Geovanni Andreotti');
INSERT INTO frases (frase, autor) VALUES('quizá con got pase xdd', 'Gabriel Jiménez');
INSERT INTO frases (frase, autor) VALUES('POYO CTM', 'Todos menos poyo');
INSERT INTO frases (frase, autor) VALUES('esta toalla es muy absorvente y me gusta metermela por el ano es demaciado zabrozo', 'Gabriel Jiménez');
INSERT INTO frases (frase, autor) VALUES('no wn pa que tan chato, y se va a dejar el pack pa el. Marako', 'Gabriel Jiménez');
