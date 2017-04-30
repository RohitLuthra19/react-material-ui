/**
 * Base libraries
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = (event) => this.setState({open: !this.state.open});

  render() {

    const {styleFromProps} = this.props;
    const contentStyle = {  ...styleFromProps, transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    const Dashboard = () => <div style={contentStyle}><h1>Hello from Home!</h1></div>;
    const Information = () => <div style={contentStyle}><h1>We are located at 555 Jackson St.</h1></div>;

    if (this.state.open) {
      contentStyle.marginLeft = 256;
    }
    
    return (
        <Router>
          <div>
          <AppBar title="Quark XPress Server" onLeftIconButtonTouchTap={this.handleToggle} />

            <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} docked={true} width={200} open={this.state.open} zDepth={2}>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}><MenuItem>Dashboard</MenuItem></Link>
              <Link to="/information" style={{ textDecoration: 'none' }}><MenuItem>Information</MenuItem></Link>
            </Drawer>

            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/information' component={Information} />
          </div>
        </Router>
    );
  }
}

export default App;
