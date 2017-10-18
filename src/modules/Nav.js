import React, { Component } from 'react'
import { Link } from 'react-router-dom';

var divStyle = {
  height: 30
}

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="" style={divStyle}></div>
        <div className="ui three item menu" >
            <Link to="/index" className="header item"><i className="location arrow icon"></i>Austin TSA Go</Link>
            <Link to="/food" className="item"><i className="food icon"></i>Food</Link>
            <Link to="/living" className="item"><i className="map icon"></i>Living</Link>
        </div>
      </div>);
  }
}

export default Nav;
