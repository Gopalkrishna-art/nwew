function matchesPlayedPerYear(matches) {
    if(!matches){
        throw new Error('Matches not defined');
    }
    return matches.reduce((years, match) => {
        if(!match.season){
            throw new Error('Correct data not defined');
        }
        if (years[match.season]) {
            years[match.season] += 1;
        } else {
            years[match.season] = 1;
        }
       
        return years;
    }, {});
}
module.exports = matchesPlayedPerYear;


