import React from 'react'

class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world from clock class component!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

export default Clock;