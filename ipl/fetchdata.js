const csv = require('csvtojson');
// File path for the receiving-data
const MATCHES_FILE_PATH="./data/matches.csv";
const DELIVERIES_FILE_PATH="./data/deliveries.csv";

async function fetchData() {
    try{
        const matchesDataPromise = csv().fromFile(MATCHES_FILE_PATH);
        const deliveriesDataPromise = csv().fromFile(DELIVERIES_FILE_PATH);
      
        const megaPromise = Promise.all([matchesDataPromise, deliveriesDataPromise]);
         const data = await megaPromise;
         return data;
        } catch(err){
            console.log(err);
        }
    }

module.exports = fetchData;