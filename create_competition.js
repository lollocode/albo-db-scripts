const { writeFileSync } = require("fs")

const name = [
	"gara bella",
	"gara brutta",
	"gara bellina",
	"gara bruttina",
	"gara carina",
	"gara media",
	"gara bella",
	"gara brutta",
	"gara bellina",
	"gara bruttina",
	"gara carina"
]
const dates = [
	'2018-01-01',
	'2018-02-12',
	'2018-03-25',
	'2018-07-28',
	'2018-05-21',
	'2018-11-03',
	'2018-01-31',
	'2018-12-25',
	'2018-10-30',
	'2018-2-17',
	'2018-07-09'
	]

const subjects = [1,2,3,4,5,1,2,3,4,5,1,2]

const query = ["INSERT INTO competitions VALUES \n"]

for (let i = 0; i < 11; i++) {
	query.push(`(DEFAULT,"${name[i]}","${dates[i]}",${subjects[i]})`)
	query.push(",\n")
}
query.pop();
query.push(";")
writeFileSync("seed_competition.sql", query.join(""), "utf8")
console.log("competitions seeder query generated!")
