import React from "react";
import PropTypes from "prop-types";

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
      cat: 0
    };
  }

  update(event) {
    this.setState({ txt: event.target.value });
  }

  render() {
    let txt = this.props.txt;
    return (
      <div>
        <h1>Hello, World!!</h1>
        <b>Bold text</b>
        <p>{txt}</p>
        <p>
          {this.state.txt} - {this.state.cat}
        </p>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    );
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

export default App;
