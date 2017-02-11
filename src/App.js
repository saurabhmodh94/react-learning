import React from 'react';

// // stateless component
// const App = () => <h1>Hello World!</h1>

class App extends React.Component {
  render (){
    return (
      <div>
        <h1>Hello</h1>
        <h2>World</h2>
      </div>
    )
    // return <h1 className="" >Hello World:</h1>
    // return React.createElement ('h1',null,'Hello World!!')
  }
}

export default App