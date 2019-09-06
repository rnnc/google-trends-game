const googleTrends = require('google-trends-api');
const fs = require('fs');

module.exports = async (term1, term2) => {

  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 12);

  let result;
  try {
    result = await googleTrends.interestOverTime({
      keyword: [term1, term2],
      startTime: startDate
    })
  } catch (error) {
    throw `Error receiving trends data\n${error}`;
  }

  const data = formatData(result);

  return {
    [term1]: data[0],
    [term2]: data[1]
  };

}

function formatData(raw_data) {

  fs.writeFileSync('./data.json', raw_data);

  const { timelineData } = JSON.parse(raw_data).default;

  return timelineData[timelineData.length - 1].value;
}

