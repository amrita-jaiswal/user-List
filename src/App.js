import React, { Component } from 'react';
import PersonList from "./component/index";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <PersonList />
        {/* <Person /> */}
      </div>
    )
  }
}
