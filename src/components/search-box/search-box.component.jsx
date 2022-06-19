import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input type= 'search' 
        className={this.props.className}
        // placeholder='Search Monster'
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
        />
      </div>
    )
  }
}
