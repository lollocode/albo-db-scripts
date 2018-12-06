const { writeFileSync } = require("fs")

const passwords = [
	"ba768oein",
	"foh97n9cc",
	"uoaiyhc8c",
	"hnc8anvmp",
	"im80a7wn'",
	"pjva7jm0m",
	"cakaumoev",
	"kauvn0eok",
	"avmin7oem",
	"aoauvjkjl",
	"7h87687jv"
]
const names = [
	"Cleta Florence",
	"Rona Hiebert",
	"Domonique Mancha",
	"Aurelio Honea",
	"Torri Mcgray",
	"Tommy Cremeans",
	"Sharell Beverlin",
	"Kylee Stelzer",
	"Felecia Northwa",
	"Andra Boroughs",
	"Soila Bloss",
	"Yasmine Christopherso",
	"Mozella Emigh",
	"Matha Vasbinder",
	"Kristine Hundley",
	"Elisa Cravens",
	"Shaina Brimer",
	"Fredrick Houchin",
	"Arlene Larin",
	"Han Dubose",
	"Foster Dukes",
	"Jolyn Marko",
	"Vernetta Anastasio",
	"Marcelene Hayles",
	"Tomas Venezia",
	"Anastasia Higginbottom",
	"Audie Kelley",
	"Jose Halloway",
	"Kimberely Lafuente",
	"Denita Jacobo"
]
const surnames = ["Cruz","Middleton","Villegas","Wagner","Vang","Brock","Ponce","Wiley","Rosario","Jordan","Huffman","Fernandez"]

const query = ["INSERT INTO users(email, password, schoolId, name, surname, notes) VALUES \n"]

for (let i = 0; i < 500; i++) {
	const name = names[i%30]
	const surname = surnames[i%12]
	query.push(`("${(name+surname).replace(/\s/g, '')}@mail.com", "${passwords[i%11]}", ${i%15+1}, "${name.replace(/\s/g, '')}", "${surname.replace(/\s/g, '')}", "note")`)
	query.push(",\n")
}
query.pop();
query.push(";")
writeFileSync("userSeeder.sql", query.join(""), "utf8")
console.log("user seeder query generated!")
