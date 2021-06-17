const matchesWonPerTeam = require('./ipl/matchesWonPerTeam.js');
const fetchData = require('./ipl/fetchdata.js');


let matchesData;

async function receiveData() {
  [matchesData] = await fetchData();
  return matchesData;
}

test('MatchesPlayedPerYear', async() => {
  matchesData= await receiveData();
  expect(matchesWonPerTeam(matchesData)).toEqual({
    
        "2008": {
            "Kolkata Knight Riders": 6,
            "Chennai Super Kings": 9,
            "Delhi Daredevils": 7,
            "Royal Challengers Bangalore": 4,
            "Rajasthan Royals": 13,
            "Kings XI Punjab": 10,
            "Deccan Chargers": 2,
            "Mumbai Indians": 7
        },
        "2009": {
            "Mumbai Indians": 5,
            "Royal Challengers Bangalore": 9,
            "Delhi Daredevils": 10,
            "Deccan Chargers": 9,
            "Chennai Super Kings": 8,
            "Kolkata Knight Riders": 3,
            "Rajasthan Royals": 6,
            "Kings XI Punjab": 7
        },
        "2010": {
            "Kolkata Knight Riders": 7,
            "Mumbai Indians": 11,
            "Delhi Daredevils": 7,
            "Deccan Chargers": 8,
            "Royal Challengers Bangalore": 8,
            "Chennai Super Kings": 9,
            "Rajasthan Royals": 6,
            "Kings XI Punjab": 4
        },
        "2011": {
            "Chennai Super Kings": 11,
            "Rajasthan Royals": 6,
            "Royal Challengers Bangalore": 10,
            "Mumbai Indians": 10,
            "Pune Warriors": 4,
            "Kolkata Knight Riders": 8,
            "Kings XI Punjab": 7,
            "Deccan Chargers": 6,
            "Kochi Tuskers Kerala": 6,
            "Delhi Daredevils": 4,
            "": 1
        },
        "2012": {
            "Mumbai Indians": 10,
            "Delhi Daredevils": 11,
            "Pune Warriors": 4,
            "Rajasthan Royals": 7,
            "Royal Challengers Bangalore": 8,
            "Chennai Super Kings": 10,
            "Kolkata Knight Riders": 12,
            "Kings XI Punjab": 8,
            "Deccan Chargers": 4
        },
        "2013": {
            "Kolkata Knight Riders": 6,
            "Royal Challengers Bangalore": 9,
            "Sunrisers Hyderabad": 10,
            "Rajasthan Royals": 11,
            "Mumbai Indians": 13,
            "Kings XI Punjab": 8,
            "Chennai Super Kings": 12,
            "Pune Warriors": 4,
            "Delhi Daredevils": 3
        },
        "2014": {
            "Kolkata Knight Riders": 11,
            "Royal Challengers Bangalore": 5,
            "Kings XI Punjab": 12,
            "Rajasthan Royals": 7,
            "Delhi Daredevils": 2,
            "Chennai Super Kings": 10,
            "Sunrisers Hyderabad": 6,
            "Mumbai Indians": 7
        },
        "2015": {
            "Kolkata Knight Riders": 7,
            "Chennai Super Kings": 10,
            "Rajasthan Royals": 7,
            "Royal Challengers Bangalore": 8,
            "Kings XI Punjab": 3,
            "Sunrisers Hyderabad": 7,
            "Delhi Daredevils": 5,
            "Mumbai Indians": 10,
            "": 2
        },
        "2016": {
            "Rising Pune Supergiants": 5,
            "Kolkata Knight Riders": 8,
            "Gujarat Lions": 9,
            "Royal Challengers Bangalore": 9,
            "Mumbai Indians": 7,
            "Delhi Daredevils": 7,
            "Kings XI Punjab": 4,
            "Sunrisers Hyderabad": 11
        },
        "2017": {
            "Sunrisers Hyderabad": 8,
            "Rising Pune Supergiant": 10,
            "Kolkata Knight Riders": 9,
            "Kings XI Punjab": 7,
            "Royal Challengers Bangalore": 3,
            "Mumbai Indians": 12,
            "Delhi Daredevils": 6,
            "Gujarat Lions": 4
        }
    
  });
});


test('MatchesWonPerTeam when passed empty', async() => {
  expect(()=>{
    matchesWonPerTeam();
  }).toThrow('Matches data not defined')
    
    });
  
  
    test('MatchesWonPerTeam when passed null', async() => {
    expect(()=>{
        matchesWonPerTeam(null);
    }).toThrow('Matches data not defined')
      
      });
    
     
    test('MatchesWonPerTeam when passed undefined', async() => {
    expect(()=>{
        matchesWonPerTeam(undefined);
    }).toThrow('Matches data not defined')
      
      });

      test('MatchesPlayedPerYear when passed  data without season', async() => {
        expect(()=>{
            matchesWonPerTeam([{
            city:'hydrabad',
            house:'ramuji'
          }]);
        }).toThrow('Correct data not defined')
          });


      test('MatchesPlayedPerYear', async() => {
        matchesData= await receiveData();
        expect(matchesWonPerTeam(matchesData)).toEqual({
          
              "2008": {
                  "Kolkata Knight Riders": 6,
                  "Chennai Super Kings": 9,
                  "Delhi Daredevils": 7,
                  "Royal Challengers Bangalore": 4,
                  "Rajasthan Royals": 13,
                  "Kings XI Punjab": 10,
                  "Deccan Chargers": 2,
                  "Mumbai Indians": 7
              },
              "2009": {
                  "Mumbai Indians": 5,
                  "Royal Challengers Bangalore": 9,
                  "Delhi Daredevils": 10,
                  "Deccan Chargers": 9,
                  "Chennai Super Kings": 8,
                  "Kolkata Knight Riders": 3,
                  "Rajasthan Royals": 6,
                  "Kings XI Punjab": 7
              },
              "2010": {
                  "Kolkata Knight Riders": 7,
                  "Mumbai Indians": 11,
                  "Delhi Daredevils": 7,
                  "Deccan Chargers": 8,
                  "Royal Challengers Bangalore": 8,
                  "Chennai Super Kings": 9,
                  "Rajasthan Royals": 6,
                  "Kings XI Punjab": 4
              },
              "2011": {
                  "Chennai Super Kings": 11,
                  "Rajasthan Royals": 6,
                  "Royal Challengers Bangalore": 10,
                  "Mumbai Indians": 10,
                  "Pune Warriors": 4,
                  "Kolkata Knight Riders": 8,
                  "Kings XI Punjab": 7,
                  "Deccan Chargers": 6,
                  "Kochi Tuskers Kerala": 6,
                  "Delhi Daredevils": 4,
                  "": 1
              },
              "2012": {
                  "Mumbai Indians": 10,
                  "Delhi Daredevils": 11,
                  "Pune Warriors": 4,
                  "Rajasthan Royals": 7,
                  "Royal Challengers Bangalore": 8,
                  "Chennai Super Kings": 10,
                  "Kolkata Knight Riders": 12,
                  "Kings XI Punjab": 8,
                  "Deccan Chargers": 4
              },
              "2013": {
                  "Kolkata Knight Riders": 6,
                  "Royal Challengers Bangalore": 9,
                  "Sunrisers Hyderabad": 10,
                  "Rajasthan Royals": 11,
                  "Mumbai Indians": 13,
                  "Kings XI Punjab": 8,
                  "Chennai Super Kings": 12,
                  "Pune Warriors": 4,
                  "Delhi Daredevils": 3
              },
              "2014": {
                  "Kolkata Knight Riders": 11,
                  "Royal Challengers Bangalore": 5,
                  "Kings XI Punjab": 12,
                  "Rajasthan Royals": 7,
                  "Delhi Daredevils": 2,
                  "Chennai Super Kings": 10,
                  "Sunrisers Hyderabad": 6,
                  "Mumbai Indians": 7
              },
              "2015": {
                  "Kolkata Knight Riders": 7,
                  "Chennai Super Kings": 10,
                  "Rajasthan Royals": 7,
                  "Royal Challengers Bangalore": 8,
                  "Kings XI Punjab": 3,
                  "Sunrisers Hyderabad": 7,
                  "Delhi Daredevils": 5,
                  "Mumbai Indians": 10,
                  "": 2
              },
              "2016": {
                  "Rising Pune Supergiants": 5,
                  "Kolkata Knight Riders": 8,
                  "Gujarat Lions": 9,
                  "Royal Challengers Bangalore": 9,
                  "Mumbai Indians": 7,
                  "Delhi Daredevils": 7,
                  "Kings XI Punjab": 4,
                  "Sunrisers Hyderabad": 11
              },
              "2017": {
                  "Sunrisers Hyderabad": 8,
                  "Rising Pune Supergiant": 10,
                  "Kolkata Knight Riders": 9,
                  "Kings XI Punjab": 7,
                  "Royal Challengers Bangalore": 3,
                  "Mumbai Indians": 12,
                  "Delhi Daredevils": 6,
                  "Gujarat Lions": 4
              }
          
        });
      });
      