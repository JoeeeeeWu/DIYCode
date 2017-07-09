import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppStackNav from "./app/js/page/AppStackNav";

export default class DIYCode extends Component {
  render() {
    return (
      <AppStackNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

AppRegistry.registerComponent("DIYCode", () => DIYCode);
