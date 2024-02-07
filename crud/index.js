const getConnect = require('./connection');

const main = async () => {
    let data = await getConnect();
    let result = await data.find({ category: "camera" }).toArray();
    console.log("data", result);
}

main()