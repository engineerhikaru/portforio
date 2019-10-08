import * as React from "react";
import { Helmet } from "react-helmet";

// 画像のインポート
import works1 from '../../images/works1.png';
import works2 from '../../images/works2.png';

export class Works extends React.Component{
  render(){
    return (
      <div class="main">
        <div class="title"><h1>実績 | Engineerhikaru's Portforio Site</h1></div>
        <Workshead />
        <div class="fbox">
          <div class="fbox-works">
            <img src={works1} />
          </div>
          <div class="fbox-works">
            <img src={works2} />
          </div>
        </div>
      </div>
    )
  }
}

class Workshead extends React.Component{
  render(){
    return (
      <Helmet>
        <title>実績 | EngineerhikaruWorks</title>
      </Helmet>
    )
  }
}
