import React, { Component } from 'react';
import data from '../data';

export const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {};

  render() {
    return (
      <RoomContext.Provider value="hello">
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export const RoomConsumer = RoomContext.Consumer;
