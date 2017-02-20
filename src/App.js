import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items:[]
    }
  }
  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
    .then( response => response.json())
    .then(({results: items}) => {this.setState({items})}) //did not understand
  }
  render(){
    let items = this.state.items;
    return (
      <div>{items.map(item => <Name key={item.name} passdata={item}/>)}</div> //each chile should have unique key
    )
  }
}
const Name = (props) => <p>{props.passdata.name}</p>

export default App
