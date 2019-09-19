import moment from "moment"
import _ from "lodash"

export const GenerateMockData = () => {
  const today = moment().startOf("day")
  const data = []

  //generate one year back
  for (let index = 0; index < 7; index++) {
    data.push({
      date: today.subtract(1, "day").unix(),
      down: Math.floor(Math.random() * 9000),
      up: Math.floor(Math.random() * 9000)
    })
  }

  return data
}
