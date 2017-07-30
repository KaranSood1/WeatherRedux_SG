import React, { Component } from 'react';
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyB66t38-BANa7SL93hp4bSLPdEwyJ0cLqo';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}
