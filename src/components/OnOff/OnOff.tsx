import React from 'react';

type OnOffType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff: React.FC<OnOffType> = React.memo((props) => {

    console.log('UncontrolledOnOff rendering')

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        margin: '10px',
        backgroundColor: props.on ? 'green' : ''
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        margin: '10px',
        backgroundColor: props.on ? '' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        border: '1px solid black',
        margin: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={onStyle} onClick={() => props.setOn(true)}>On</div>
            <div style={offStyle} onClick={() => props.setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
});