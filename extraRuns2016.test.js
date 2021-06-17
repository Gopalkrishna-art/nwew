
const extraRuns2016 = require('./ipl/extraRuns2016.js');
const fetchData = require('./ipl/fetchdata.js');
const {matchesFilePath,deliveriesFilePath} = require('./ipl/constants.js');
let data
async function receiveData() {
  data = await fetchData();
  return data;
}

test('ExtraRuns2016', async() => {
  data= await receiveData();
 
  expect(extraRuns2016(data)).toEqual({
    
        "Rising Pune Supergiants": 108,
        "Mumbai Indians": 102,
        "Kolkata Knight Riders": 122,
        "Delhi Daredevils": 106,
        "Gujarat Lions": 98,
        "Kings XI Punjab": 100,
        "Sunrisers Hyderabad": 107,
        "Royal Challengers Bangalore": 156
    
  });
});



test('extraRuns2016 when passed empty', async() => {
expect(()=>{
  extraRuns2016();
}).toThrow('Matches not defined')
  
  });


  test('extraRuns2016 when passed null', async() => {
  expect(()=>{
    extraRuns2016(null);
  }).toThrow('Matches not defined')
    
    });
  
   
  test('extraRuns2016 when passed undefined', async() => {
  expect(()=>{
    extraRuns2016(undefined);
  }).toThrow('Matches not defined')
    
    });

    
test('ExtraRuns2016', async() => {
  data= await receiveData();
 
  expect(extraRuns2016(data)).not.toEqual({
    
        "Rising Pune Supergiants": 108,
        "Mumbai Indians": 102,
        "Kolkata Knight Riders": 122,
        "Delhi Daredevils": 106,
        "Gujarat Lions": 98,
        "Kings XI Punjab": 100,
        "Sunrisers Hyderabad": 107,
        "Royal Challengers Bangalore": 156
    
  });
});
