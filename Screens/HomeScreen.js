import React, { Component } from "react"
import { Text, View } from "react-native"
import moment from "moment"
import _ from "lodash"

import ChartComponent from "./Components/ChartComponent"
import { GenerateVictoryData } from "../Functions/VictoryNativeFactory"
import { GenerateMockData } from "../Functions/MockDataGenerator"
import NavButtonsComponent from "./Components/NavButtonsComponent"

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
    console.log("SET STATE")
    let startTime = new Date().getTime()
    this.setState(
      {
        lastDayOfMonth: this.getLastDayOfMonth(currentDay),
        firstDayOfMonth: this.getFirstDayOfMonth(currentDay),
        currentDay
      },
      () => {
        console.log("ended in " + (new Date().getTime() - startTime) + " milliseconds")
      }
    )
  }

  getFirstDayOfMonth = currentDay => {
    return moment(currentDay).startOf("week")
  }

  getLastDayOfMonth = currentDay => {
    const today = moment().startOf("day")

    if (today.isSame(currentDay, "week")) {
      return moment(currentDay).endOf("day")
    }
    return moment(currentDay).endOf("week")
  }

  render() {
    const { rawData, firstDayOfMonth, lastDayOfMonth, currentDay } = this.state
    return (
      <View>
        <Text> Victory Native </Text>
        <ChartComponent data={GenerateVictoryData(rawData, firstDayOfMonth, lastDayOfMonth)} />
        <NavButtonsComponent
          onNextPress={() => {
            console.log("PRESS")
            const tempDate = moment(currentDay).add(1, "week")
            if (!tempDate.isAfter(moment())) {
              this.populateFirstAndLastDays(tempDate)
            }
          }}
          onPreviousPress={() => {
            console.log("PRESS")
            const tempDate = moment(currentDay).subtract(1, "week")
            if (!tempDate.isBefore(moment().add(-1, "year"))) {
              this.populateFirstAndLastDays(tempDate)
            }
          }}
        />
      </View>
    )
  }
}
