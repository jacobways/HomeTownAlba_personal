module.exports = (hourlyWage, time, daysPerWeek) => {
  // 변수는 number Type으로 와야 함
  let daysPerMonth = parseInt(daysPerWeek * 30 / 7)
  return hourlyWage * time * daysPerMonth
}