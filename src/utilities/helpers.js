const daysMap = {
  "0": "Sunday",
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday"
};

const monthsMap = {
  "0": "Jan",
  "1": "Feb",
  "2": "Mar",
  "3": "Apr",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "Aug",
  "8": "Sept",
  "9": "Oct",
  "10": "Nov",
  "11": "Dec"
};

function convertTemp(kelvin) {
  return parseInt((kelvin - 273.15) * 1.8 + 32.0, 10);
}

function getDate(unixTimestmap) {
  let timestamp = new Date(unixTimestmap * 1000);
  let day = daysMap[timestamp.getDay()];
  let date = timestamp.getDate();
  let month = monthsMap[timestamp.getMonth()];
  return `${day}, ${month} ${date}`;
}

export { convertTemp, getDate };
