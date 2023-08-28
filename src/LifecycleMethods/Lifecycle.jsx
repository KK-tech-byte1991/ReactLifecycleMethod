import React, { Component } from 'react';

class LifecycleDemo extends Component {
  // Constructor: This is where you can set the initial state and bind event handlers.
  constructor(props) {
    super(props);
    this.state = { message: 'Hello, React!' };
    console.log('Constructor called');
  }

  // componentDidMount: Called after the component is rendered to the DOM.
  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillMount() {
    console.log('Component Will mount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  // componentDidUpdate: Called after the component's state or props change and it re-renders.
  componentDidUpdate() {
    console.log('Component did update');
  }

  // componentWillUnmount: Called before the component is removed from the DOM.
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // handleClick: An example event handler to change the state.
  handleClick = () => {
    this.setState({ message: 'State updated!' });
  };

  // render: This method is required and returns the JSX to be rendered.
  render() {
    console.log('Render called');
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Update State</button>
      </div>
    );
  }
}

export default LifecycleDemo;
