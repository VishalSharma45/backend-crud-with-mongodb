const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = 'e-comm';
const getConnect = require('./connection');

const main = async () =>{
    let data = await getConnect();
    let result = await data.find({category:"camera"}).toArray();
    console.log("data",result)
}

main()