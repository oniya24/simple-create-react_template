import React,{ useState } from 'react';
import { Input } from 'antd';

function WelcomeToReact(props){
    console.log(props);
    const onValueChange = (e)=>{
        props.changeText(e.target.value);
    }
    return(
        <div className="WelcomeToReact">
            <Input maxLength={30} placeholder="please Input" value={props.text} onChange={(e)=>onValueChange(e)}></Input>
        </div>
    )
}

export default WelcomeToReact;