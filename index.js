const writeData=require('./ipl/writeData.js')
const matchesPlayedPerYear=require('./ipl/matchesPlayedPerYear.js');
const matchesWonPerTeam= require('./ipl/matchesWonPerTeam.js');
const extraRuns2016= require('./ipl/extraRuns2016.js');
const topEconomicalBowlers= require('./ipl/topEconomicalBowlers.js');
const fetchData = require("./ipl/fetchdata.js");
const config=require('./ipl/const.js')


async function getData() {

  const [matches, deliveries] = await fetchData();
  const matchesPlayedResult = matchesPlayedPerYear(matches);
  writeData(config.writePathMatchesPlayedPerYear, matchesPlayedResult);


  const matchesWinPerTeamResult = matchesWonPerTeam(matches);
  writeData(config.writePathMatchesWonPerTeam, matchesWinPerTeamResult);


  const extraRunsResult = extraRuns2016(deliveries, matches);
  writeData(config.writePathExtraRuns2016, extraRunsResult);

 
  const economicalBowlersResult = topEconomicalBowlers(deliveries, matches);
  writeData(config.writePathTopEconomicalBowlers, economicalBowlersResult);
}
getData();























