import * as React from "react";
import { Helmet } from "react-helmet";

export class Head extends React.Component{
  render(){
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description}>
        <meta name="keywords" content={this.props.keywords}>
        <meta property="og:locale" content="ja_JP">
        <meta property="og:site_name" content="ENGINEERHIKARU's PORTFORIO">
        <meta property="og:title" content={this.props.title}>
        <meta property="og:type" content="website">
        <meta property="og:description" content={this.props.description}>
        <meta property="og:url" content={this.props.url}>
        <meta property="og:image" content={this.props.img}>
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@engineerhikaru">
        <link rel="canonical" href={this.props.url} />
      </Helmet>
    )
  }
}
