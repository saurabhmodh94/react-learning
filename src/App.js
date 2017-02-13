import React from 'react';

class App extends React.Component {
  render (){
    return (
      <Button>I <Heart/> React</Button>
    )
  }
}

class Heart extends React.Component {
  render (){
    return (
      <span>&hearts;</span>
    )
  }
}

const Button = (props) => <button>{props.children}</button>

export default App
