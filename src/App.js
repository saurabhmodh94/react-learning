import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      increasing : false
    }
  }
  update(e){
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('root')
    )
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return nextProps.val % 5 === 0
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", `prev: ${prevProps.val} new: ${this.props.val}`);
  }
  render(){
    console.log("render");
    return (
      <div>
        <button onClick={this.update.bind(this)}>{this.props.val}</button>
      </div>
    )
  }
}

App.defaultProps = {
  val: 0
}

export default App
