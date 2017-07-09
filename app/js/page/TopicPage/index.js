import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TabNavigator } from "react-navigation";

import PostList from "../../component/PostList";

import { httpGet } from "../../httpUtil";
import baseUrl, {
  headerBgColor,
  dotColor,
  lightFontColor,
} from "../../const";

const types = [{
  type: "",
  name: "全部帖子",
}, {
  type: "popular",
  name: "优质帖子",
}, {
  type: "excellent",
  name: "完美帖子",
}, {
  type: "recent",
  name: "最新创建",
}, {
  type: "no_reply",
  name: "无人问津",
}];
const routeConfig = {};
types.forEach((item, index) => {
  const query = item.type ? `&type=${item.type}` : "";
  const url = `topics.json?limit=10${query}`;
  routeConfig[`${item.type}Tab`] = {
    screen: ({ navigation }) => (
      <PostList url={url} navigation={navigation} />
    ),
    navigationOptions: {
      tabBarLabel: item.name,
    },
  };
});

const topicPage = TabNavigator(routeConfig, {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    tabStyle: {
      paddingHorizontal: 0,
    },
    activeTintColor: dotColor,
    inactiveTintColor: lightFontColor,
    style: {
      backgroundColor: headerBgColor,
    },
  },
});

export default topicPage;
