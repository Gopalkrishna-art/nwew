
const topEconomicalBowlers = require('./ipl/topEconomicalBowlers.js');
const fetchData = require('./ipl/fetchdata.js');

let data;

async function receiveData() {
  data = await fetchData();
  return data;
}


test('TopEconomicalBowlers', async() => {
  data= await receiveData();

  expect(topEconomicalBowlers(data)).not.toEqual({
    
        "RN ten Doeschate": 3.43,
        "J Yadav": 4.14,
        "V Kohli": 5.45,
        "R Ashwin": 5.7,
        "S Nadeem": 5.86,
        "MC Henriques": 6.04,
        "Z Khan": 6.04,
        "Parvez Rasool": 6.2,
        "MA Starc": 6.42,
        "Sandeep Sharma": 6.75
    
  });
});



test('TopEconomicalBowlers when passed empty', async() => {
expect(()=>{
  topEconomicalBowlers();
}).toThrow('Matches not defined')
  
  });


  test('TopEconomicalBowlers when passed null', async() => {
  expect(()=>{
    topEconomicalBowlers(null);
  }).toThrow('Matches not defined')
    
    });
  
   
  test('TopEconomicalBowlers when passed undefined', async() => {
  expect(()=>{
    topEconomicalBowlers(undefined);
  }).toThrow('Matches not defined')
    
    });

  
    