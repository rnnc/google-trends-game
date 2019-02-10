const googleTrends = require('google-trends-api');

module.exports.getTrendDataResults = async (term1, term2) => {

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

  const { timelineData } = JSON.parse(result).default;

  const data = timelineData[timelineData.length - 1].formattedValue;

  return {
    [term1] : data[0],
    [term2] : data[1]
  };

}