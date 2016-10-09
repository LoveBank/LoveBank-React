import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducers';
import { Button, Textfield } from 'react-mdl';
import api from './api/api';

const store = createStore(reducers);

class App extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
    }
  }

  onSubmit = () => {
    if (this.state.fname !== '' && this.state.lname !== '' && this.state.email !== '') {
      api.getProfileByEmail(this.state.email).subscribe(user => console.log(user));
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Love Treasury</h2>
          </div>
          <Textfield
              onChange={(event) => this.setState({ fname: event.target.value })}
              label="First Name"
              style={{width: '200px'}}
          />
          <Textfield
              onChange={(event) => this.setState({ lname: event.target.value })}
              label="Last Name"
              style={{width: '200px'}}
          />
          <Textfield
              onChange={(event) => this.setState({ email: event.target.value })}
              label="Email"
              style={{width: '200px'}}
            />
            <Button raised colored onClick={this.onSubmit}>Login</Button>
        </div>
      </Provider>
    );
  }
}

export default App;

