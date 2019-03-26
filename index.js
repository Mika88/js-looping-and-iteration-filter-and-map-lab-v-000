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

function exactMatch(drivers, {attribute: value}) {
  return drivers.filter(function (driver){
    return driver.attribute === value;
    debugger;
  })
}
