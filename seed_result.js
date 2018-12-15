const { writeFileSync } = require("fs")

const id = new Array(33).fill(null).map((e, i) => i+1)

const alias = [
	'ciao',
	'mare',
	'tizio',
	'caio',
	'sempronio',
	'bella',
	'raga',
	'spalla',
	'gentile',
	'moro',
	'porcile',
	'ciao',
	'mare',
	'tizio',
	'caio',
	'sempronio',
	'bella',
	'raga',
	'spalla',
	'gentile',
	'moro',
	'porcile','ciao',
	'mare',
	'tizio',
	'caio',
	'sempronio',
	'bella',
	'raga',
	'spalla',
	'gentile',
	'moro',
	'porcile'
	]

const score = new Array(30).fill(null).map((e, i) => i+30).reverse()

const rank =new Array(30).fill(null).map((e, i) => e=i+1)



const query = ["INSERT INTO result(studentId,competitionId,alias,score,rank) VALUES \n"]

for (let i = 0; i < 30; i++) {
	const stud = id[i]
	const comp = id[i]
	const alia = alias[i]
	const scor = score[i]
	const ran = rank[i]
	query.push(`(${stud},${comp},"${alia}",${scor},${ran})`)
	query.push(",\n")
}
query.pop();
query.push(";")
writeFileSync("resultSeeder.sql", query.join(""), "utf8")
console.log("competitions seeder query generated!")
