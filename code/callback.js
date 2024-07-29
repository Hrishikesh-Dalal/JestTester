function fetchData(callback){
    setTimeout(() => {
        callback("Data Received");
    }, 1000);
}
module.exports = fetchData;