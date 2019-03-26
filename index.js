// Code your solution here:
function driversWithRevenueOver(list, revenue) {
  return list.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(list, revenue) {
  const newList = driversWithRevenueOver(list, revenue)
  return newList.map(function (driver) {
    return driver.name;
  })
}

function exactMatch(list, object) {
  return list.filter(function (driver) {
    debugger;
    for (const key in driver) {
      debugger;
      return driver.key === object.key;
    }
  })
}
