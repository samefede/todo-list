const express = require('express')
const app = express()
const mysql = require('mysql')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todo-list',
})

app.get('/', (req, res) => {
    
    const sqlInsert = "INSERT INTO todo (todo) VALUES ('uwu');"
    db.query(sqlInsert, (err, result)=>{
        res.send("a");
    })
    
})

app.listen(3001, () => {
    console.log('running on port: 3001');
})