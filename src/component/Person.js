import React, { Component } from 'react'

export default class Person extends Component {
  constructor() {
    super();
    this.state ={
      persons :[]
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
    .then(results => {
      return results.json();
    }).then(data => {
      return(
      <div>{this.state.persons.data && this.state.persons.data.avatar}</div>
      )
    })
    this.setState({persons: persons});

  }
  
  render() {
    return (
      <div>{this.state.persons.data && this.state.persons.data.avatar}</div>
    )
  }
}
