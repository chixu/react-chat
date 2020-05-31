export function stringToDate(str) {
  // 'YYYYMMDDHHMMSS'
  return new Date(`${str.substr(0, 4)}-${str.substr(4, 2)}-${str.substr(6, 2)} ${str.substr(8, 2)}:${str.substr(10, 2)}:${str.substr(12, 2)}`)
}

export function getTodayTimeOrDateTime(datetimeStr) {
  let now = new Date();
  let time = stringToDate(datetimeStr);
  let timeStr = datetimeStr.substr(8, 2) + ":" + datetimeStr.substr(10, 2);
  return now.getDate() === time.getDate() ? timeStr :
    (datetimeStr.substr(0, 4) + "-" + datetimeStr.substr(4, 2) + "-" + datetimeStr.substr(6, 2) + ' ' + timeStr);
}