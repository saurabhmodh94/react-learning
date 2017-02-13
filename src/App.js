import React from 'react';

class App extends React.Component {
  render (){
    return (
      <Button text="Text Message">I <Heart/> React</Button>
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

Button.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`${propName} missing`);
    }
    if(props[propName].length < 6){
      return new Error(`${propName} too short`);
    }
  }
}
export default App
