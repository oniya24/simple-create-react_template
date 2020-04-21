import React, { Component } from 'react';
console.log({
    "bugs": {
        "url": "https://github.com/oniya24/sample-create-react_template/issues"
      },
    "homepage": "https://github.com/oniya24/sample-create-react_template#readme",
    "repository":{
        "type": "git",
        "url": "git+https://github.com/oniya24/sample-create-react_template.git"
    },
    },
)
class HelloWorld extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                { this.props.children }
            </div>
        )
    }
}

export default HelloWorld;