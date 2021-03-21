import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

 
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000)
  }
  //setInterval... it evaluates a expression, 
  //and a specific interval (in millisecons),
  //setInterval continues calling a function,
  //until clearIntervall is called
  //basically this method will let you delay something 
  //on a component. OR cause a repeating Change. Perfect for timers
  //BEST PRACTICE, assign it to a variable within 
  //the scope of our class like this... this.interval



  componentWillUnmount() {
    clearInterval(this.interval)
  }
  //we use this method to stop anything we 
  //set up in the componentDidMount.
  //we use 'clearInterval' 
  //we pass in this.interval that we created up top, that we assigned






  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }



  
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };
  //This method is in charge of updating state
  //it adds 1 to the previous state.

  stopClock = () => {
    clearInterval(this.interval);
  };
  //this one is for stopping the timer.

  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
  //this one is for deleting a timer.
}

export default Timer;
