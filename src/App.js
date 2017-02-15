import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      val : 0
    }
    this.update = this.update.bind(this)

  }
  update(e){
    this.setState({
      val : this.state.val + 1
    })
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render(){
    console.log("render");
    return (
      <div>
        <button onClick={this.update}>Click Me</button>< hr/>
        {this.state.val}
      </div>
    )
  }
}


class Wrapper extends React.Component {
  mount(e){
    ReactDOM.render(
      <App />,
      document.getElementById("a")
    )
  }
  unmount(e){
    ReactDOM.unmountComponentAtNode(document.getElementById("a"))
  }
  render () {
    return (
      <div>
      <button onClick={this.mount.bind(this)}> Mount </button>
      <button onClick={this.unmount.bind(this)}> Unmount </button>
      <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
