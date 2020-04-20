import React,{ useState } from 'react';
import { Input } from 'antd';

function WelcomeToReact(props){
    const [ value, setValue ] = useState("");
    return(
        <div>
            <Input placeholder="please Input" value={value} onChange={(e)=>{ setValue(e.target.value) }}></Input>
        </div>
    )
}

export default WelcomeToReact;