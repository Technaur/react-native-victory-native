import moment from "moment"
import _ from "lodash"

export const GenerateVictoryData = (rawData, firstDayOfMonth, lastDayOfMonth) => {
  const dateRange = GetGraphDateRangeArray(firstDayOfMonth, lastDayOfMonth)

  const dateRangeSet = _.filter(rawData, e => {
    return dateRange.includes(e.date)
  })

  const upData = dateRangeSet.map(e => {
    return { x: moment.unix(e.date).format("DD/MM"), y: e.up, label: e.up }
  })

  const downData = dateRangeSet.map(e => {
    return { x: moment.unix(e.date).format("DD/MM"), y: e.down, label: e.down }
  })

  const data = {
    up: upData,
    down: downData
  }

  return data
}

export const GetGraphDateRangeArray = (startDate, endDate) => {
  const daysDiff = endDate.diff(startDate, "days")
  const end = moment(endDate)
    .subtract(1, "days")
    .startOf("day")

  const range = []

  for (let index = 0; index <= daysDiff; index++) {
    if (!index) {
      range.push(end.unix())
    } else {
      range.push(end.subtract(1, "days").unix())
    }
  }

  return range
}
