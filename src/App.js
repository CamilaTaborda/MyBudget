import React, {Component} from 'react';
//import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography type="title" color="inherit">
                                My Budget
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;
