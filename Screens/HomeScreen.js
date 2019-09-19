import React, { Component } from "react"
import { Text, View } from "react-native"
import ChartComponent from "./Components/ChartComponent"
import { GenerateVictoryData } from "../Functions/VictoryNativeFactory"
import { GenerateMockData } from "../Functions/MockDataGenerator"

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> Victory Native </Text>
        <ChartComponent data={GenerateVictoryData(GenerateMockData())} />
      </View>
    )
  }
}
