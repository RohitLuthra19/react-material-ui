/**
 * Base libraries
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';  
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Dashboard from './Dashboard/dashboard.js';
import Information from './Information/information.js';
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

            <Route path="/dashboard" component={(props) => <Dashboard {...props} open={this.state.open}/>} />
            <Route path="/information" component={(props) => <Information {...props} open={this.state.open}/>} />
          </div>
        </Router>
    );
  }
}

export default App;
