import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment} className="btngreen">
          Increment<sapn><i class="fa-solid fa-plus"></i></sapn>
        </button>
        <button onClick={this.decrement} className="btndanger">
          Decrement<span><i class="fa-solid fa-minus"></i></span>
        </button>
        <h2 className="display">{this.props.count}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
