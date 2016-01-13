import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import App from './components/App';

window.React = React;

render(
  (<Router>
    <Route path="/" component={App}>

    </Route>
  </Router>), document.getElementById('app')
);


// var HelloWorld = React.createClass({
//   propTypes : {
//     name : React.PropTypes.string.isRequired,
//     isPerson : React.PropTypes.bool
//   },
//   getDefaultProps : function(){
//     return {
//       name : 'Aswin'
//     };
//   },
//   getInitialState : function(){
//     return {
//       value : 1
//     };
//   },
//   componentDidMount : function(){
//
//   },
//   _addByOne : function(){
//     this.setState({
//       value: this.state.value + 1
//     });
//   },
//   render : function(){
//     var greeting = "World!";
//
//     if (this.props.isPerson) {
//       greeting = (
//         <Person name={this.props.name} />
//       );
//     }
//
//     return (
//       <div>
//         <h1>Hello {greeting}</h1>
//         {this.state.value}
//         <button className="btn btn-primary" onClick={this._addByOne}>Click Me</button>
//       </div>
//     )
//   }
// });
//
// var Person = React.createClass({
//   propTypes : {
//     name : React.PropTypes.string.isRequired
//   },
//   getDefaultProps : function(){
//     return {
//       name : 'Aswin'
//     };
//   },
//   render : function(){
//     return (
//       <span>{this.props.name}!</span>
//     )
//   }
// });

// render(
//   <HelloWorld name="Sylvester" isPerson={false} />,//HTML that has to be rendered
//   document.getElementById('area') //place holder where it has to be rendered
// );
