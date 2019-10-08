import * as React from "react";
import { Helmet } from "react-helmet";

// 画像のインポート
import donkey from '../../images/donkey.png';

// 各パーツ読み込み
import { Sns } from "../Sns";

export class Home extends React.Component{
  render(){
    return (
      <div class="main">
        <div class="title"><h1>Engineerhikaru's Portforio Site</h1></div>
        <Homehead />
        <HomeContents />
        <Sns />
      </div>
    )
  }
}

class HomeContents extends React.Component{
  render(){
    return (
      <div class="fbox">
        <div class="fbox-img">
          <img src={donkey} />
        </div>
        <div class="fbox-pg">
          <h3>
            <span>WEB ENGINEER</span>
            <span>DESIGNER</span>
            <span>APP ENGINEER</span>
            <span>MARKETER</span>
          </h3>
          <h2>ENGINEER HIKARU</h2>
          <p>元陸上自衛官のフリーランスエンジニア。Javaを学習してからは、あらゆる言語を習得。<br />現在、得意言語はPHP。フレームワークはLaravel,React,ReactNativeが得意。<br />WordPressを使ってのサイト構築やアプリ開発をやっている。</p>
        </div>
      </div>
    )
  }
}

class Homehead extends React.Component{
  render(){
    return (
      <Helmet>
        <title>Engineerhikaru</title>
      </Helmet>
    )
  }
}
