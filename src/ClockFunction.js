function ClockFunction(props) {
    return (
      <div>
        <h1>Hello, world from Clock Function!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

export default ClockFunction;