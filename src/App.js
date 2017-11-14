import React from "react";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';

// //Stateless statement
// const App = () => <h1>Hello stateless</h1>

// class App extends React.Component {
//   render() {
//     return React.createElement('h1', null, 'Hello, World!');
//   }
// }

// //JSX example
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "This is the state text",
      cat: 0,
      currentEvent: '---',
      a: '',
      val: 0
    };
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({ 
      txt: event.target.value, 
      currentEvent: event.type,
      a: this.a.refs.input.value,
      b: this.refs.b.value,
      val: this.state.val + 1
    });
  }

  render() {
    let txt = this.props.txt;
    console.log("render");
    return (
      <div>
        <h1>Hello, World!!</h1>
        <b>Bold text</b>
        <h2>Set Props on React Components:</h2>
        <p>{txt}</p>
        <h2>Manage components with setState:</h2>
        <p>
          {this.state.txt} - {this.state.cat}
        </p>
        <h2>Components as Childrens for Other Components:</h2>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <h2>Access Nested Data with props.children:</h2>
        <Button>I <Heart /> React</Button>
        <h2>Add custom propType Validation:</h2>
        <Title text="The Title prop text"/>
        <h2>Normalize Events with Synthetic Event System:</h2>
        <textarea
          cols="30"
          rows="10"
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update} />
        <h3>{this.state.currentEvent}</h3>
        <h2>ref to Get a Reference to Specific Components:</h2>
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        />  {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
        />  {this.state.b}
        <h2>Understand the React Component Lifecycle Methods:</h2>
        <button onClick={this.update}>{this.state.val}</button>
      </div>
    );
  }
//More React Components Lifecycle Methods
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

//Specifing property types
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
};

//Specifing default props
App.defaultProps = {
  txt: "This is the default text"
};

const Widget = props => <input type="text" onChange={props.update} />;

//Accessign to a childrens objects
const Button = props => <button>{props.children}</button>
class Heart extends React.Component {
  render () {
    return <span>&hearts;</span>
  }
}

//Custom props validations
const Title = props => <h3>Title: {props.text}</h3>
Title.propTypes = {
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error('Missing ${propName}');
    }
    if(props[propName].length < 6) {
      return new Error('${propName} was too short.');
    }
  }
}

//ref for referencing components
class Input extends React.Component {
  render () {
    return <input ref="input" type="text" onChange={this.props.update} />
  }
}

//Component for unmount button
class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
}

//export default App;
export default Wrapper;
