// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const timeArray = time.split(':')
  const hour = Number(timeArray[0]);
  const minute = Number(timeArray[1]);

  let string = "";

  if (time === '0:00') {
    string = 'midnight';
  } else if (time === '12:00') {
    string = 'midday';
  } else if (minute === 0) {
    string = convertNumberToWords(hour) + " o'clock";
  } else if (minute < 30 && minute !== 15) {
    string = convertNumberToWords(minute) + " past " + convertNumberToWords(hour)
  } else if (minute > 30 && minute !== 45) {
    string = convertNumberToWords(60 - minute) + " to " + convertNumberToWords(hour + 1)
  }

  // x:15 = quater past <hour>

  // x:30 = half past <hour>

  // x:45 = quater to <hour +1>

  return string;
}

function convertNumberToWords(number) {
  return numberObject[number];
}

const numberObject = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  // '21': 'twenty one',
  // '22': 'twenty two',
  // '23': 'twenty three',
  // '24': 'twenty four',
  // '25': 'twenty five',
  // '26': 'twenty six',
  // '27': 'twenty seven',
  // '28': 'twenty eight',
  // '29': 'twenty nine',
};

module.exports = { convertTimeToWords };