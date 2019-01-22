const { writeFileSync } = require("fs")

const mate = ["OLIMPIADI DELLE MATEMATICA","KANGOUROU DELLA MATEMATICA","OLIMPIADI DELLA STATISTICA"]
const info = ["OLIMPIADI DI INFORMATICA","OLIMPIADI DEL PROBLEM SOLVING","GARA BEBRAS"]
const scienze = ["OLIMPIADI DI SCIENZE NATURALI","OLIMPIADI DI SCIENZE"]
const fisica = ["OLIMPIADI DI FISICA"]
const astronomia = ["OLIMPADI DI ASTRONOMIA"]


const dates = ['2018-01-01','2018-02-12','2018-03-25','2018-07-28','2018-05-21','2018-11-03','2018-01-31','2018-12-25','2018-10-30','2018-2-17','2018-07-09','2018-7-14','2018-08-15','2018-12-23','2018-1-22','2018-02-05','2018-06-12','2018-05-27','2018-09-24','2018-03-01','2018-02-27','2018-02-19','2018-11-14','2018-5-31',]


const query = ["INSERT INTO competitions VALUES \n"]

for (let i = 0; i < 5; i++) {
	const count = Math.floor(Math.random() * mate.length);
	const index=Math.floor(Math.random() * dates.length);
	query.push(`(DEFAULT,"${mate[count]}","${dates[index]}",1)`)
	query.push(",\n")
}
for (let i = 0; i < 5; i++) {
	const count = Math.floor(Math.random() * info.length);
	const index=Math.floor(Math.random() * dates.length);
	query.push(`(DEFAULT,"${info[count]}","${dates[index]}",6)`)
	query.push(",\n")
}for (let i = 0; i < 5; i++) {
	const count = Math.floor(Math.random() * scienze.length);
	const index=Math.floor(Math.random() * dates.length);
	query.push(`(DEFAULT,"${scienze[count]}","${dates[index]}",3)`)
	query.push(",\n")
}for (let i = 0; i < 5; i++) {
	const count = Math.floor(Math.random() * fisica.length);
	const index=Math.floor(Math.random() * dates.length);
	query.push(`(DEFAULT,"${fisica[count]}","${dates[index]}",2)`)
	query.push(",\n")
}for (let i = 0; i < 5; i++) {
	const count = Math.floor(Math.random() * astronomia.length);
	const index=Math.floor(Math.random() * dates.length);
	query.push(`(DEFAULT,"${astronomia[count]}","${dates[index]}",5)`)
	query.push(",\n")
}
query.pop()
query.push(";")
writeFileSync("seed_competition.sql", query.join(""), "utf8")
console.log("competitions seeder query generated!")
