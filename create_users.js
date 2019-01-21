const { writeFileSync } = require("fs")
const email=[]
const password=[]
const school= new Array(15).fill(null).map((e,i) => i+1)
const name= ["Lorenzo","Tiziana","Marco","Luca","Sara","Giovanni","Marta","Camilla","Alberta","Carla","Andrea","Giulio","Simone","Alessia","Federica"]
const surname=["Rossi","Segalini","Esposito","Bianchi","Romano","Bruno","Gallo","Conti","Moretti","Barbieri","Rinaldi","Coppola","Villa","Fabbri","Codeluppi"]
const query = ["INSERT INTO users(email,password,schoolId,name,surname) VALUES \n"]


for(let i=0;i<15;i++){
	email.push(`${name[i]}.${surname[i]}@gmail.com`)
	password.push(`${name[i]}_${surname[i]}`)
}

for(let n=0;n<15;n++){
	query.push(`("${email[n]}","${password[n]}",${school[n]},"${name[n]}","${surname[n]}")`)
	query.push(",\n")
}


query.push(";")
writeFileSync("seed_users.sql", query.join(""), "utf8")
console.log("users seeder query generated!")