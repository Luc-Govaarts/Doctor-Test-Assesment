import React from 'react'
import {useHistory} from "react-router-dom";

export default function Button(props) {
    const history = useHistory()

    const onClick = () => {
        history.push(props.goto)
    }
    return (
        <div>
            <button 
            onClick={onClick}
            className={props.className}
            >{props.display}
            </button>
        </div>
    )
}
