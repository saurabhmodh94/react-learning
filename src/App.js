import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "Hello World"
    }
  }
  update (e){
    this.setState({
      txt : e.target.value
    })
  }
  render (){
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}></input>
        <h3>{this.state.txt}</h3>
      </div>
    )
  }
}

export default App