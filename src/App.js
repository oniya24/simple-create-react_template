import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '@/HelloWorld';
import WelcomeToReact from '@/WelcomeToReact';
import pika from './assets/pika.jpg';
import './main.scss';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainText:"HelloWorld"
        }

    }
    freshMainText(value){
        this.setState({
            mainText:value
        })
    }
    render(){
        return(
            <Fragment>
                <img src={ pika }></img>
                <HelloWorld text={this.state.mainText}></HelloWorld>
                <WelcomeToReact text={this.state.mainText} changeText={this.freshMainText.bind(this)}></WelcomeToReact>
            </Fragment>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('root') );