import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 32;

const Box = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color
  }
  return <div style={style} />
}

class App extends Component {
  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.randomColor, this);
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.randomColor();
      this.setState({boxes});
    }, 300);
  }

randomColor() {
  return "#"+((1<<24)*Math.random()|0).toString(16);
}
  
  render() {
    const boxes = this.state.boxes.map((color, i) => (
      <Box key={i} color={color} />
    ))
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

export default App;
