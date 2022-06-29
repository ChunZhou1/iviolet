//the function below used to cal average price per night

//string  to date
//usage console.log(fun_api_inn.stringToDate("2021-05-01"));

const BEFORE_CHARGE = 3; //days

var moment = require("moment");

function stringToDate(string) {
  var s = string.replace(/-/g, "/");
  var date = new Date(s);

  return date;
}

//get year,month,day from Date
function getYearMonthDayFromDate(date) {
  var date1 = stringToDate(date.slice(0, 10));
  var year = date1.getFullYear();
  var month = date1.getMonth() + 1;
  var day = date1.getDate();
  return [year, month, day];
}

//ms - to --date
function msToDate(ms) {
  var d = new Date();
  d.setTime(ms);
  return d;
}

function gerTimePeriod(day) {
  var now_s = moment().format("YYYY-MM-DD");

  var now = stringToDate(now_s);

  var dateMs = now.getTime();
  var endDate = msToDate(dateMs + 24 * 3600 * 1000 * day);
  var now_s = now.toISOString().slice(0, 10);
  var endDate_s = endDate.toISOString().slice(0, 10);
  return [now_s, endDate_s];
}

//input:startDate,endDate,price
//output price array array per night

function gerPriceArrPerNight(startDate, endDate, price) {
  var startMs = stringToDate(startDate).getTime();
  var endMs = stringToDate(endDate).getTime();

  var periodDay = Math.round((endMs - startMs) / 1000 / 3600 / 24);

  var priceArray = [];

  for (var i = 0; i < periodDay; i++) {
    var priceObj = new Object();
    priceObj.startTime = startMs + i * 24 * 3600 * 1000;
    priceObj.price = price;
    priceArray.push(priceObj);
  }

  return priceArray;
}

//compare two array and replace price

function findStartTime(inputObj) {
  var sub =
    inputObj.startTime > this.startTime
      ? inputObj.startTime - this.startTime
      : this.startTime - inputObj.startTime;

  return sub < 2 * 3600 * 1000;
}

function adjustPrice(priceArray_s, priceArray_d) {
  for (var i = 0; i < priceArray_s.length; i++) {
    var index = -1;
    index = priceArray_d.findIndex(findStartTime, priceArray_s[i]);

    if (index != -1) {
      priceArray_s[i].price = priceArray_d[index].price;
    }
  }

  return priceArray_s;
}

//adjust price for weekday
function adjustPriceWeekDay(priceArray, weekDay, price) {
  for (var i = 0; i < priceArray.length; i++) {
    if (msToDate(priceArray[i].startTime).getDay() == weekDay) {
      priceArray[i].price = price;
    }
  }

  return priceArray;
}

//input: roomCode array by productCode and occupt roomCode array and order amount
//output: room code array to register

function findRoomCode(inputObj) {
  return inputObj.roomCode == this.roomCode;
}

function gerRoomCodeArrayForRegister(
  roomCodeArray_s,
  roomCodeArray_o,
  closeRoomArray,
  amount
) {
  var i;
  if (
    roomCodeArray_s.length == 0 ||
    roomCodeArray_s.length -
      roomCodeArray_o.length -
      closeRoomArray.length -
      amount <
      0
  ) {
    return [];
  }

  if (closeRoomArray.length > 0) {
    for (i = 0; i < closeRoomArray.length; i++) {
      roomCodeArray_o.push(closeRoomArray[i]);
    }
  }

  if (roomCodeArray_o.length == 0) {
    return roomCodeArray_s.slice(0, amount);
  }

  for (i = 0; i < roomCodeArray_o.length; i++) {
    var index = -1;
    index = roomCodeArray_s.findIndex(findRoomCode, roomCodeArray_o[i]);
    if (index != -1) {
      roomCodeArray_s.splice(index, 1);
    }
  }

  roomCodeArray_s.sort();

  return roomCodeArray_s.slice(0, amount);
}

//the function used to random
function getRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return Min + Math.round(Rand * Range);
}

////ger code
function gerCode(type) {
  var firstLetter;
  switch (type) {
    case "orderNumber":
      firstLetter = "D";
      break;

    case "userCode":
      firstLetter = "C";
      break;

    case "tempUserCode":
      firstLetter = "T";
      break;

    default:
      firstLetter = "N";
      break;
  }

  var date = new Date();

  var year = date.getFullYear().toString();
  year = year.slice(2);

  var month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString();

  var day =
    date.getDate() < 10
      ? "0" + date.getDate().toString()
      : date.getDate().toString();

  var random =
    firstLetter + year + month + day + getRandomNum(10000, 99999).toString();

  return random;
}

//get json start end, for booking
function getStartStopForBooking(inputObj) {
  let array = [];
  if (inputObj == {}) {
    return array;
  }
  let keys = Object.keys(inputObj);

  keys.map((key) => {
    var obj = new Object();
    obj.startTime = JSON.stringify(inputObj[key].start).slice(1, 11);
    obj.stopTime = JSON.stringify(inputObj[key].end).slice(1, 11);
    obj.source = "booking";

    array.push(obj);
  });

  return array;
}

//judge if checkinTime-now<3
function judgeCheckTime(checkTime) {
  let now = new Date();

  /*console.log("checkTime>>>", checkTime);
  console.log(
    "stringToDate(checkTime).getTime()>>>",
    stringToDate(checkTime).getTime()
  );

  console.log("now.getTime()>>>", now.getTime());*/

  if (
    stringToDate(checkTime).getTime() - now.getTime() <
    3 * 24 * 3600 * 1000
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  stringToDate: stringToDate,
  gerPriceArrPerNight: gerPriceArrPerNight,
  adjustPrice: adjustPrice,
  adjustPriceWeekDay: adjustPriceWeekDay,
  msToDate: msToDate,
  gerRoomCodeArrayForRegister: gerRoomCodeArrayForRegister,
  gerCode: gerCode,
  gerTimePeriod: gerTimePeriod,
  getYearMonthDayFromDate: getYearMonthDayFromDate,
  getStartStopForBooking: getStartStopForBooking,
  judgeCheckTime: judgeCheckTime,
};
