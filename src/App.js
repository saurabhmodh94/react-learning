import React from 'react';
import ReactDOM from 'react-dom';


const HOC = (InnerComponent)  => class extends React.Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  update(){
    this.setState({count: this.state.count + 1})
  }

  render () {
    return (
      <div>
        <InnerComponent
          {...this.props}
          {...this.state}
          update ={this.update.bind(this)}
          />
      </div>
    )
  }
}


class App extends React.Component {
  render () {
    return(
      <div>
        <Button>Hello</Button>
        <hr/>
        <LabelHOC>World</LabelHOC>
      </div>
    )

  }
}

const Button = HOC((props) =>
<button onClick={props.update}>
  {props.children} - {props.count}
</button>
)

const Label = React.createClass({
  render () {
    return (
      <div>
        <label onMouseOver={this.props.update}>
          {this.props.children} - {this.props.count}
        </label>
      </div>
    )
  }
})

const LabelHOC = HOC(Label)

export default App
