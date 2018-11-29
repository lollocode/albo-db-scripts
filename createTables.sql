CREATE TABLE IF NOT EXISTS schools (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id INT(11) AUTO_INCREMENT,
  email VARCHAR(45) UNIQUE NOT NULL,
  password VARCHAR(64) NOT NULL,
  school_id INT(11) REFERENCES schools(id),
  name VARCHAR(45) NOT NULL,
  surname VARCHAR(45) NOT NULL,
  notes VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS students (
  id INT(11) AUTO_INCREMENT,
  school_id INT(11) REFERENCES schools(id),
  name VARCHAR(45) NOT NULL,
  surname VARCHAR(45) NOT NULL,
  cf VARCHAR(16) UNIQUE NOT NULL,
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
  comp_date DATE NOT NULL,
  subject_id INT(11) REFERENCES subjects(id),
  type_id INT(11) REFERENCES types(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS results (
  id INT(11) AUTO_INCREMENT,
  school_id INT(11) REFERENCES schools(id),
  competition_id INT(11) REFERENCES competitions(id),
  alias VARCHAR(45),
  score INT (11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tags_competitions_th (
  id INT(11) AUTO_INCREMENT,
  tag_id INT(11) REFERENCES tags(id),
  competition_id REFERENCES competitions(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS types_competitions_th (
  id INT(11) AUTO_INCREMENT,
  type_id INT(11) REFERENCES types(id),
  competition_id REFERENCES competitions(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS results_students_th (
  id INT(11) AUTO_INCREMENT,
  result_id INT(11) REFERENCES results(id),
  student_id INT(11) REFERENCES students(id),
  PRIMARY KEY (id)
);