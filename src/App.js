import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      a: "",
      b: "",
      c: "",
      d: ""
    }
  }
  update(e){
    this.setState({
      a : this.a.value,
      b : this.refs.b.value,
      c : ReactDOM.findDOMNode(this.c).value,
      d : this.d.refs.compo.value,
    })
  }
  render(){
    return (
      <div>
        <input type="text" ref={node => this.a = node} onChange={this.update.bind(this)}></input>{this.state.a}
        <hr />
        <input type="text" ref="b" onChange={this.update.bind(this)}></input>{this.state.b}
        <hr />
        {
          //comment
        }
        <Input upd={this.update.bind(this)} ref={ component => this.c = component} />{this.state.c}
        <hr />
        <InputDiv upd1={this.update.bind(this)} ref={ component => this.d = component} />{this.state.d}
      </div>
    )
  }
}

class Input extends React.Component {
  render () {
    return <input type="text" onChange={this.props.upd}></input>
  }
}

class InputDiv extends React.Component {
  render () {
    return <div>
      <input type="text" ref="compo" onChange={this.props.upd1}></input>
    </div>

  }
}

export default App
