import React from 'react';

// // stateless component
// const App = () => <h1>Hello World!</h1>

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "Hello World",
      num: 0
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
        <h3>{this.state.txt} - {this.state.num}</h3>
      </div>
    )
    // let txt = this.props.txt

    // return (
    //   <div>
    //     <input type="text" onChange={this.update.bind(this)}></input>
    //     <h1>Hello</h1>
    //     <h2>World</h2>
    //     <h3>{txt} {this.props.num}</h3>
    //   </div>
    // )
    // return <h1 className="" >Hello World:</h1>
    // return React.createElement ('h1',null,'Hello World!!')
  }
}

App.propTypes = {
  txt : React.PropTypes.string,
  num : React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "Hi",
  num: 5
}

export default App