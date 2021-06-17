
const matchesPlayedPerYear = require('./ipl/matchesPlayedPerYear.js');
const fetchData = require('./ipl/fetchdata.js');
const {matchesFilePath,deliveriesFilePath} = require('./ipl/constants.js');

let matchesData;

async function receiveData() {
  [matchesData] = await fetchData();
  return matchesData;
}
test('MatchesPlayedPerYear', async() => {
  matchesData= await receiveData();
 
  expect(matchesPlayedPerYear(matchesData)).toEqual({
   "2008": 58,
   "2009": 57,
   "2010": 60,
   "2011": 73,
   "2012": 74,
   "2013": 76,
   "2014": 60,
   "2015": 59,
   "2016": 60,
   "2017": 59
  });
});

test('MatchesPlayedPerYear', async() => {
  matchesData= await receiveData();
 
  expect(matchesPlayedPerYear(matchesData)).not.toEqual({
   "2008": 58,
   "2009": 57,
   "2010": 60,
   "2011": 73,
  
   "2013": 76,
   "2014": 60,
   "2015": 59,
   "2016": 60,
   "2017": 59
  });
});



test('MatchesPlayedPerYear when passed empty', async() => {
expect(()=>{
  matchesPlayedPerYear();
}).toThrow('Matches not defined')
  
  });


  test('MatchesPlayedPerYear when passed null', async() => {
  expect(()=>{
    matchesPlayedPerYear(null);
  }).toThrow('Matches not defined')
    
    });
  
   
  test('MatchesPlayedPerYear when passed undefined', async() => {
  expect(()=>{
    matchesPlayedPerYear(undefined);
  }).toThrow('Matches not defined')
    
    });

    test('MatchesPlayedPerYear when passed data without season', async() => {
      expect(()=>{
        matchesPlayedPerYear([{
          city:'hydrabad',
          house:'ramuji'
        }]);
      }).toThrow('Correct data not defined')
        });
    
    