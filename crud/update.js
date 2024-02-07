const getConnect = require('./connection');

const updateData = async () => {
    let data = await getConnect();
    let result = await data.updateMany(
        { name: "note 10 pro" },
        { $set: { name: "note 10 pro", price: 350 } }
    );
    console.log(result);
}

updateData();