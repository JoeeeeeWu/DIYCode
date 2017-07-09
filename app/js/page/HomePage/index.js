import { TabNavigator, TabBarBottom } from "react-navigation";

import {
  headerBgColor,
  dotColor,
} from "../../const";
import TopicPage from "../TopicPage";
import ProjectPage from "../ProjectPage";
import NewsPage from "../NewsPage";
import MyPage from "../MyPage";

const HomePage = TabNavigator({
  topicPage: {
    screen: TopicPage,
    navigationOptions: {
      tabBarLabel: "话题",
    },
  },
  projectPage: {
    screen: ProjectPage,
    navigationOptions: {
      tabBarLabel: "项目",
      headerTitle: "项目",
    },
  },
  newsPage: {
    screen: NewsPage,
    navigationOptions: {
      tabBarLabel: "新闻",
      headerTitle: "新闻",
    },
  },
  myPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "我的",
    },
  },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
  tabBarOptions: {
    inactiveBackgroundColor: dotColor,
    activeBackgroundColor: headerBgColor,
  },
});

export default HomePage;
