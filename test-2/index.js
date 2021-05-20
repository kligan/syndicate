const express = require('express');
const app = express();
const mongodb = require('mongodb');

app.use(express.json())
const { investments, users, companies } = require('./data')
const obj = [investments,users,companies]

let connectionString = `mongodb://localhost:27017/mydb`
let db

mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        db = client.db()
        app.listen(5000)
    }
)

app.post("/insert", async (req,res) => {
    db.collection("fields").insertMany(obj, function(err, res) {
        if (err) throw err;
        console.log("documents inserted");
        db.close();
    });
})

app.listen(3000, function() {
    console.log('listening on 3000')
})