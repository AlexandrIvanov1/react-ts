import React from "react";

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value:  RatingValueType
    setRating: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendered')
    return (
        <div>
            <Star selected={props.value > 0} setRating={props.setRating} value={1}/>
            <Star selected={props.value > 1} setRating={props.setRating} value={2}/>
            <Star selected={props.value > 2} setRating={props.setRating} value={3}/>
            <Star selected={props.value > 3} setRating={props.setRating} value={4}/>
            <Star selected={props.value > 4} setRating={props.setRating} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRating: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendered')
    return <span onClick={() => props.setRating(props.value)}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}