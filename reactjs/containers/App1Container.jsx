import React from "react"
import Radium from "radium"

import { connect } from "react-redux"
import {bindActionCreators} from 'redux';

import * as counterActions from "../actions/counterActions"
import Headline from "../components/Headline"


const styles = {
  button: {
    cursor: "pointer",
  },
  counter: {
    color: "blue",
    fontSize: "20px",
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(counterActions, dispatch);
}

@connect(state => ({
  counters: state.counters,
}), mapDispatchToProps)
@Radium
export default class SampleAppContainer extends React.Component {
  handleClick() {
    console.log("handdling");
    this.props.increaseCounter();
  }

  render() {
    let {counters} = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Sample App!</Headline>
            <div style={[styles.button]} onClick={() => this.handleClick()}>INCREASE</div>
             <p style={[styles.counter]}> {counters.clicks}</p>
            <p>{process.env.BASE_API_URL}</p>
          </div>
        </div>
      </div>
    )
  }
}
