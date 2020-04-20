import React, { Component, Fragment } from 'react';
import HelloWorld from './component/HelloWorld';
import WelcomeToReact from './component/WelcomeToReact';

class App extends Component{
    render(){
        return(
            <Fragment>
                <HelloWorld>HelloWorld</HelloWorld>
                <WelcomeToReact></WelcomeToReact>
            </Fragment>
        )
    }
}

export default App;