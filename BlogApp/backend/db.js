import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"host.docker.internal",
    user:"root",
    password:"mysql",
    database:"blog"
})
