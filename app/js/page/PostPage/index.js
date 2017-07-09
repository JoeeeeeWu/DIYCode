import React, { Component } from "react";
import {
  View,
  Text,
  WebView,
} from "react-native";
import { httpGet } from "../../httpUtil";
import baseUrl, {
  bgColor,
  lightFontColor,
  borderColor,
} from "../../const";

class PostPage extends Component {

  state={
    postData: {},
  }

  componentWillMount=() => {
    this.fetchPostData();
  }

  fetchPostData=() => {
    console.log("haha");
    const {
      id,
    } = this.props.navigation.state.params;
    httpGet(`${baseUrl}topics/${id}.json`)
      .then(result => this.setState({
        postData: result,
      }), error => alert(error));
  }

  render() {
    const {
      postData: {
        body_html,
      } = {},
    } = this.state;
    const css = `
      <style type="text/css">
        body,html{
          overflow-x: hidden;
        }
        img{
          width: 100%;
        }
        pre{
          white-space: pre-wrap;
        }
      </style>`;
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>post</title>
        ${css}
      </head>
      <body>
          ${body_html}
      </body>
      </html>`;
    return (
      <WebView
        source={{ html: html }}
        startInLoadingState
      />
    );
  }
}

export default PostPage;
