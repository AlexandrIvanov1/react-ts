import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    onClick: (value: number) => void
    value: number
}

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type UncontrolledRatingType = {
    defaultValue?: number
    onChange?: (value: number) => void
}

export function UncontrolledRating(props: UncontrolledRatingType) {

    console.log('Rating rendered')

    let [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} onClick={setValue} value={1}/>
            <Star selected={value > 1} onClick={setValue} value={2}/>
            <Star selected={value > 2} onClick={setValue} value={3}/>
            <Star selected={value > 3} onClick={setValue} value={4}/>
            <Star selected={value > 4} onClick={setValue} value={5}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    console.log('Star rendered')
    // return props.selected ? <span><b>star </b></span> : <span>star </span>
    return  <span onClick={() => props.onClick(props.value)}> {props.selected ? <b>star</b> : 'star'}</span>
}