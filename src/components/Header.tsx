import * as React from "react";
import { Link } from 'react-router-dom';

export class Header extends React.Component{
  render(){
    return (
      <header class="header">
        <ul class="nav">
          <li><Link to="/"><i class="fas fa-home"></i></Link></li>
          <li><Link to="/works"><i class="fas fa-desktop"></i></Link></li>
          <li><Link to="/contact"><i class="fas fa-envelope-open"></i></Link></li>
        </ul>
      </header>
    )
  }
}
