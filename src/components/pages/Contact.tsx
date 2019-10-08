import * as React from "react";
import { Helmet } from "react-helmet";

export class Contact extends React.Component{
  render(){
    return (
      <div class="main">
        <div class="title"><h1>お問い合わせ | Engineerhikaru's Portforio Site</h1></div>
        <Contacthead />
        <form><input type="text" /></form>
      </div>
    )
  }
}

class Contacthead extends React.Component{
  render(){
    return (
      <Helmet>
        <title>お問い合わせ | EngineerhikaruWorks</title>
      </Helmet>
    )
  }
}
