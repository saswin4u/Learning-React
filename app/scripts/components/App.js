import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <ul className="nav nav-pills pull-right">
            <li className="active">
            <Link to="/">Home</Link>
            </li>
          </ul>
          <h3 className="text-muted">Learning react</h3>
        </div>

        <div id="area">
          { this.props.children  || <h1>Welcome to my React Learnings</h1> }
        </div>


        <div className="footer">
          <p><span className="glyphicon glyphicon-heart"></span> from Sylvester</p>
        </div>
      </div>
    )
  }
});
