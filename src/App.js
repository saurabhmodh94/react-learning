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
        <Widget update={this.update.bind(this)} />
        <h3>{this.state.txt}</h3>
      </div>
    )
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />

export default App