import './App.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Context from '../utils/Context';
import { actionsListName } from '../redux/context/reducers';
import contextActions from '../redux/context/actionTypes';

function mapStateToProps (state) {
  return {
    actions: state.context.get(actionsListName)
  }
}

class App extends Component {
  constructor (...args) {
    super(...args);

    this.evalCode = this.evalCode.bind(this);
  }

  evalCode () {
    var context = Context({}, this.props.dispatch);

    eval(this.codeInput.value);
  }

  render () {
    return (
      <div className="app">
        <section className="input">
          <textarea
            className="codeInput"
            ref={(ref) => {
              this.codeInput = ref;
            }}
          >
          </textarea>
        </section>
        <section className="controls">
          <button onClick={this.evalCode}>Test!</button>
        </section>
        <section className="output">
          {this.props.actions.map((action, index) => {
            switch (action.type) {
              case contextActions.newVariable:
                return (
                  <p key={index}>
                    New variable ({action.payload.name}) created with value {action.payload.value}
                  </p>
                );
              case contextActions.updateVariable:
                return (
                  <p key={index}>
                    Updated variable ({action.payload.name}). Had value ({action.payload.oldValue}), now has ({action.payload.newValue})
                  </p>
                );
            }
          })}
        </section>
      </div>
    );
  }
}

App.defaultProps = {
  actions: [],
};

export default connect(mapStateToProps)(App);
