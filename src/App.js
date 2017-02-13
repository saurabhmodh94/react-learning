import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      event : "--"
    }
  }
  update(e){
    this.setState({
        event: e.type
    })
  }
  render(){
    return (
      <div>
        <textarea onFocus={this.update.bind(this)}
        onClick={this.update.bind(this)}
        onCut={this.update.bind(this)}>
        Click
        </textarea>
        <h1>{this.state.event}</h1>
      </div>
    )
  }
}

export default App
