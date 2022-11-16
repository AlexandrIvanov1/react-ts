import React, {useState} from 'react';

type OnOffType = {
    defaultOn?: boolean
}

export const UncontrolledOnOff: React.FC<OnOffType> = (props) => {

    console.log('UncontrolledOnOff rendering')

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        margin: '10px',
        backgroundColor: on ? 'green' : ''
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        margin: '10px',
        backgroundColor: on ? '' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        border: '1px solid black',
        margin: '10px',
        backgroundColor: on ? 'green' : 'red'
    }
    const onClicked = () => {
        setOn(true)
    }
    const offClicked = () => {
        setOn(false)
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}