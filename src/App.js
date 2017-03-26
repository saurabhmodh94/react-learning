import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  render () {
    return(
      <Parent>
        <div className="classA">
        </div>
        <div className="classB">
        </div>
      </Parent>
    )
  }
}

const Parent = React.createClass({
  render () {
    // let items = this.props.children.map(child => child) //throws an error for single child
    // let items = React.Children.map(this.props.children, child => child) //solution 1
    // let items = React.Children.toArray(this.props.children) //solution 2
    let items = React.Children.forEach(this.props.children, child => console.log(child.props.className)) //solution 3
    // console.log(items);
    return null
  }
})


export default App
