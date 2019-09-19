import React, { Component } from "react"
import { Text, View } from "react-native"
import { VictoryChart, VictoryStack, VictoryBar } from "victory-native"

const labelStyle = { labels: { fontSize: 4, fill: "lightblue" } }

export class ChartComponent extends Component {
  render() {
    const { data } = this.props

    return (
      <View style={{ borderWidth: 5, padding: 10, justifyContent: "center", alignItems: "center" }}>
        <VictoryChart domainPadding={{ x: 25, y: 25 }} animate={{ duration: 500 }}>
          <VictoryStack colorScale={"blue"}>
            <VictoryBar data={data.up} style={{ ...labelStyle }} />
            <VictoryBar data={data.down} style={{ ...labelStyle }} />
          </VictoryStack>
        </VictoryChart>
      </View>
    )
  }
}

export default ChartComponent
