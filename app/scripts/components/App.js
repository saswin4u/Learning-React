import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="app-wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand">
                My Reach Project
              </a>
            </div>

            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact list</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main id="area" className="container">
          { this.props.children  || (
            <section>
              <h1>Welcome to my React Learnings</h1>
            </section>
          ) }
        </main>


        <div className="footer container">
          <p><span className="glyphicon glyphicon-heart"></span> from Sylvester</p>
        </div>


      </div>
    )
  }
});
