CREATE TABLE IF NOT EXISTS schools (
  id INT(11),
  name VARCHAR(45),
  email VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id INT(11) AUTO_INCREMENT,
  email VARCHAR(45),
  password VARCHAR(64),
  school_id INT(11) REFERENCES schools(id),
  name VARCHAR(45),
  surname VARCHAR(45),
  notes VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS students (
  id INT(11),
  school_id INT(11) REFERENCES schools(id),
  name VARCHAR(45),
  surname VARCHAR(45),
  cf VARCHAR(16),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tags (
  id INT(11),
  name VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS subjects (
  id INT(11),
  name VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS types (
  id INT(11),
  name VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS competitions (
  id INT(11),
  name VARCHAR(45),
  comp_date DATE,
  subject_id INT(11) REFERENCES subjects(id),
  type_id INT(11) REFERENCES types(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS results (
  id INT(11),
  school_id INT(11) REFERENCES schools(id),
  competition_id INT(11) REFERENCES competitions(id),
  alias VARCHAR(45),
  score
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tags_competitions_th (
  id INT(11),
  tag_id INT(11) REFERENCES tags(id),
  competition_id REFERENCES competitions(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS types_competitions_th (
  id INT(11),
  type_id INT(11) REFERENCES types(id),
  competition_id REFERENCES competitions(id),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS results_students_th (
  id INT(11),
  result_id INT(11) REFERENCES results(id),
  student_id REFERENCES students(id),
  PRIMARY KEY (id)
);