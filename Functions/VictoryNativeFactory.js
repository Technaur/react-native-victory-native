import moment from "moment"
import _ from "lodash"

export const GenerateVictoryData = (rawData, firstDayOfMonth, lastDayOfMonth) => {
  //   const dateRange = this.getGraphDateRangeArray(firstDayOfMonth, lastDayOfMonth)
  //   console.log("dateRange", dateRange)

  //   const dateRangeSet = _.filter(rawData, e => {
  //     return dateRange.includes(e.date)
  //   })
  //   console.log("whoop", dateRangeSet)

  const upData = rawData.map(e => {
    return { x: moment.unix(e.date).format("DD"), y: e.up, label: e.up }
  })

  const downData = rawData.map(e => {
    return { x: moment.unix(e.date).format("DD"), y: e.down, label: e.down }
  })

  const data = {
    up: upData,
    down: downData
  }

  console.log("Data", data)

  return data
}
