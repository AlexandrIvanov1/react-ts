import React, {useState} from 'react';

import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} setRating={() => {}}/>
export const Rating1 = () => <Rating value={1} setRating={() => {}}/>
export const Rating2 = () => <Rating value={2} setRating={() => {}}/>
export const Rating3 = () => <Rating value={3} setRating={() => {}}/>
export const Rating4 = () => <Rating value={4} setRating={() => {}}/>
export const Rating5 = () => <Rating value={5} setRating={() => {}}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} setRating={setRating}/>
}