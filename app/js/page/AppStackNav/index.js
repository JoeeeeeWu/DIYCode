import { StackNavigator } from "react-navigation";

import HomePage from "../HomePage";
import PostPage from "../PostPage";

const AppStackNav = StackNavigator({
  homePage: {
    screen: HomePage,
  },
  postPage: {
    screen: PostPage,
  },
});

export default AppStackNav;
