import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// 各パーツ読み込み
import { Header } from "./Header";

// ページ読み込み
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";
import { Contact } from "./pages/Contact";

// メイン部分
export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/works" component={ Works } />
          <Route path="/contact" component={ Contact } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
