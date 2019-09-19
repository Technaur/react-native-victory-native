import React, { Component } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native-elements"

export class NavButtonsComponent extends Component {
  render() {
    const { onNextPress, onPreviousPress } = this.props
    return (
      <View style={{ flexDirection: "row", borderWidth: 1, flex: 1 }}>
        <Button
          title="Previous"
          onPress={onPreviousPress}
          containerStyle={{ margin: 10, flex: 1 }}
        />
        <Button title="Next" onPress={onNextPress} containerStyle={{ margin: 10, flex: 1 }} />
      </View>
    )
  }
}

export default NavButtonsComponent
