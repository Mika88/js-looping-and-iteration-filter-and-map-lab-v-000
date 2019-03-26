// Code your solution here:
function driversWithRevenueOver(list, revenue) {
  return list.filter(function (driver) {
    return driver.revenue === revenue;
  })
}
