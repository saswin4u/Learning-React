import React from 'react';

export default React.createClass({
  propTypes : {

  },
  getDefaultProps(){
    return{
      photo : ''
    }
  },
  getInitialState(){
    return{

    };
  },
  render(){
    return(
      <li className="list-group-item">
        <h4 class="list-group-item-heading">{this.props.person.name}</h4>
        <p class="list-group-item-text">{this.props.person.phone_1}</p>
      </li>
    )
  }
});
