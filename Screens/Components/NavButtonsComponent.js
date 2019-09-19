import React, { Component } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native-elements"

export class NavButtonsComponent extends Component {
  render() {
    const { onNextPress, onPreviousPress } = this.props
    return (
      <View>
        <Button title="Previous" onPress={onPreviousPress} />
        <Button title="Next" onPress={onNextPress} />
      </View>
    )
  }
}

export default NavButtonsComponent
