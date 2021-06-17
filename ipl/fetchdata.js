const csv = require('csvtojson');
// File path for the receiving-data


async function fetchData() {
    try{
        const matchesDataPromise = csv().fromFile('./data/matches.csv');
        const deliveriesDataPromise = csv().fromFile('./data/deliveries.csv');
      
        const megaPromise = Promise.all([matchesDataPromise, deliveriesDataPromise]);
         const data = await megaPromise;
         return data;
        } catch(err){
            console.log(err);
        }
    }

module.exports = fetchData;