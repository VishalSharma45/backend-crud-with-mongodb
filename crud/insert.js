const getConnect = require('./connection');

const insert = async () => {
    let db = await getConnect();

    // *********SINGLE INSERT*******************
    // let result = await db.insertOne(
    //     { name: 'macbook pro', brand: 'apple', price: 1500, category: 'computer' }
    // )

    // *********MULTI INSERT*******************
    let result = await db.insertMany(
        [
            { name: 'mark 4', brand: 'sony', price: 5500, category: 'camera' },
            { name: 'alpha', brand: 'sony', price: 6000, category: 'camera' },
            { name: 'p 1000', brand: 'nikon', price: 2500, category: 'camera' }
        ]
    )

    if (result.acknowledged) {
        console.log("Data inserted successfully");
    }
}

insert();