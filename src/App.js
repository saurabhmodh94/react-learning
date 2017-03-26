import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input:'/*Write your code.*/',
      output: '',
      error: ''
    }
  }

  update(event){
    let code =event.target.value;
    try {
      this.setState({
        output: window.Babel.transform(code, { presets: ['es2015','react']}).code,
        error: ''
      })
    } catch (err) {
      this.setState({
        error:err.message
      })
    }
  }

  render () {
    return(
      <div>
        <p>
          {this.state.error}
        </p>
        <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}>
        </textarea>
        <pre>
          {this.state.output}
        </pre>
      </div>
    )
  }
}

export default App
