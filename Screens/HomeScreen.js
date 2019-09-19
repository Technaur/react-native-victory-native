import React, { Component } from "react"
import { Text, View } from "react-native"
import moment from "moment"
import _ from "lodash"

import ChartComponent from "./Components/ChartComponent"
import { GenerateVictoryData } from "../Functions/VictoryNativeFactory"
import { GenerateMockData } from "../Functions/MockDataGenerator"

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    const rawData = GenerateMockData()
    const today = moment().startOf("day")
    this.state = {
      rawData,
      firstDayOfMonth: this.getFirstDayOfMonth(today),
      lastDayOfMonth: this.getLastDayOfMonth(today),
      currentDay: today
    }
  }

  populateFirstAndLastDays = currentDay => {
    this.setState({
      lastDayOfMonth: this.getLastDayOfMonth(currentDay),
      firstDayOfMonth: this.getFirstDayOfMonth(currentDay),
      currentDay
    })
  }

  getFirstDayOfMonth = currentDay => {
    return moment(currentDay).startOf("month")
  }

  getLastDayOfMonth = currentDay => {
    const today = moment().startOf("day")

    if (today.isSame(currentDay, "month")) {
      return moment(currentDay).endOf("day")
    }
    return moment(currentDay).endOf("month")
  }

  render() {
    const { rawData, firstDayOfMonth, lastDayOfMonth } = this.state
    return (
      <View>
        <Text> Victory Native </Text>
        <ChartComponent data={GenerateVictoryData(rawData, firstDayOfMonth, lastDayOfMonth)} />
      </View>
    )
  }
}
