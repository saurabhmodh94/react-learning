import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items:[],
      query: null
    }
  }
  filter(e){
    this.setState({query: e.target.value})
  }
  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
    .then( response => response.json())
    .then(({results: items}) => {this.setState({items})}) //did not understand
  }
  render(){
    let items = this.state.items;
    if(this.state.query){
      items = items.filter(item => 
        item.name.toLowerCase().includes(this.state.query.toLowerCase())
      )
    }
    return (
      // <div>{items.map((item,i) => <p key={i}>{item.name}</p>)}</div>
      <div>
        <input onChange={this.filter.bind(this)} type="text"/>
        {items.map(item => <Name key={item.name} passdata={item}/>)}
      </div> //each child should have unique key
    )
  }
}
const Name = (props) => <p>{props.passdata.name}</p>

export default App
