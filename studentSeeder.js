const { writeFileSync } = require("fs")

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

const query = ["INSERT INTO users(schoolId, name, surname, cf) VALUES \n"]

for (let i = 100; i < 600; i++) {
	const name = names[i%30]
	const surname = surnames[i%12]
	query.push(`("${i%15+1}, "${name.replace(/\s/g, '')}", "${surname.replace(/\s/g, '')}", "${name.slice(0, 3)+surname.slice(0, 3)+"0000000"+i}")`)
	query.push(",\n")
}
query.pop();
query.push(";")
writeFileSync("studentSeeder.sql", query.join(""), "utf8")
console.log("student seeder query generated!")
