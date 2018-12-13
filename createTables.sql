CREATE TABLE IF NOT EXISTS schools (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id INT(11) AUTO_INCREMENT,
  email VARCHAR(45) UNIQUE NOT NULL,
  password VARCHAR(64) NOT NULL,
  schoolId INT(11),
  name VARCHAR(45) NOT NULL,
  surname VARCHAR(45) NOT NULL,
  notes VARCHAR(45),
  FOREIGN KEY (schoolId) REFERENCES schools(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS students (
  id INT(11) AUTO_INCREMENT,
  schoolId INT(11),
  name VARCHAR(45) NOT NULL,
  surname VARCHAR(45) NOT NULL,
  cf VARCHAR(16) UNIQUE NOT NULL,
  FOREIGN KEY (schoolId) REFERENCES schools(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tags (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(45) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS subjects (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(45) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS types (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(45) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS competitions (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  compDate DATE NOT NULL,
  subjectId INT(11) NOT NULL,
  typeId INT(11) NOT NULL,
  FOREIGN KEY (subjectId) REFERENCES subjects(id),
  FOREIGN KEY (typeId) REFERENCES types(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS results (
  id INT(11) AUTO_INCREMENT,
  studentId INT(11) NOT NULL,
  competitionId INT(11) NOT NULL,
  alias VARCHAR(45),
  score INT (11),
  ranking INT(11),
  FOREIGN KEY (studentId) REFERENCES students(id),
  FOREIGN KEY (competitionId) REFERENCES competitions(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tags_competitions_th (
  id INT(11) AUTO_INCREMENT,
  tagId INT(11) NOT NULL,
  competitionId INT(11) NOT NULL,
  FOREIGN KEY (tagId) REFERENCES tags(id),
  FOREIGN KEY (competitionId) REFERENCES competitions(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS types_competitions_th (
  id INT(11) AUTO_INCREMENT,
  typeId INT(11) NOT NULL,
  competitionId INT(11) NOT NULL,
  FOREIGN KEY (typeId) REFERENCES types(id),
  FOREIGN KEY (competitionId) REFERENCES competitions(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS results_students_th (
  id INT(11) AUTO_INCREMENT,
  resultId INT(11) NOT NULL,
  studentId INT(11) NOT NULL,
  FOREIGN KEY (resultId) REFERENCES results(id),
  FOREIGN KEY (studentId) REFERENCES students(id),
  PRIMARY KEY (id)
);