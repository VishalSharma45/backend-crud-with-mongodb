const getConnect = require('./connection');

const deleteData = async () => {
    let data = await getConnect();
    let result = await data.deleteMany({name:'note 10 pro'});
    console.log(result);
    if(result.acknowledged){
        console.log("Record deleted successfully");
    }
}

deleteData();