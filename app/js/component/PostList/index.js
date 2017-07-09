import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import moment from "moment";
import { httpGet } from "../../httpUtil";
import baseUrl, {
  bgColor,
  lightFontColor,
  borderColor,
} from "../../const";

class PostList extends Component {

  state={
    postListData: [],
    refreshing: false,
    page: 1,
  }

  componentWillMount=() => {
    this.fetchPostsData();
  }

  fetchPostsData=(page = 1) => {
    const {
      url,
    } = this.props;
    const {
      postListData,
    } = this.state;
    if (page === 1) {
      this.setState({
        refreshing: true,
      });
    }
    httpGet(`${baseUrl + url}&offset=${(page - 1) * 10}`)
      .then(result => this.setState({
        refreshing: false,
        postListData: page === 1 ? result : postListData.concat(result),
        page: page + 1,
      }), error => {
        this.setState({
          refreshing: false,
        });
        alert(error);
      });
  }

  renderItem=({ item = {} }) => {
    const {
      id,
      title,
      updated_at,
      user: {
        login,
        avatar_url,
      } = {},
    } = item;
    return (
      <TouchableOpacity 
        key={id} 
        style={styles.card}
        onPress={() => {
          this.props.navigation.navigate("postPage", { id });
        }}
      >
        <View style={styles.user}>
          <Image
            source={{ uri: avatar_url }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.login} numberOfLines={1}>{login}</Text>
            <Text style={styles.time}>{`最近更新：${moment(updated_at).format("YYYY/MM/DD HH:mm")}`}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderSeparator=() => (
    <View style={styles.separator} />
  )

  onRefresh=() => {
    this.fetchPostsData();
  }

  onEndReached=({ distanceFromEnd }) => {
    const {
      page,
    } = this.state;
    this.fetchPostsData(page);
  }

  render() {
    const {
      postListData,
      refreshing,
    } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={postListData}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          onRefresh={this.onRefresh}
          refreshing={refreshing}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  card: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  info: {
    marginLeft: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  login: {
    color: lightFontColor,
  },
  time: {
    color: lightFontColor,
  },
  title: {
    color: lightFontColor,
  },
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: borderColor,
  },
});

export default PostList;
