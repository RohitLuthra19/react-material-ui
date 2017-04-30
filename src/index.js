/**
 * Base libraries
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * For touce events
 */
import injectTapEventPlugin from 'react-tap-event-plugin';
try {
    injectTapEventPlugin();
} catch (e) {
    // do nothing
}
/**
 * Included file
 */
import App from './App';
import './index.css';

const Main = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
