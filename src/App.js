import React from 'react';

// // stateless component
// const App = () => <h1>Hello World!</h1>

class App extends React.Component {
  render (){
    let txt = this.props.txt
    return (
      <div>
        <h1>Hello</h1>
        <h2>World</h2>
        <h3>{txt} {this.props.num}</h3>
      </div>
    )
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