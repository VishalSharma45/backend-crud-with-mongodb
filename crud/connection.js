const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = 'e-comm';

async function getConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products')
}

getConnect();

module.exports = getConnect;

// WITH PROMISES

// function getConnect() {
//     client.connect()
//         .then((result) => result.db(database))
//         .then((res) => res.collection('products'))
//         .then((result) => result.find({ "brand": "moto" }).toArray())
//         .then((res) => console.log(res));
// }
// getConnect();