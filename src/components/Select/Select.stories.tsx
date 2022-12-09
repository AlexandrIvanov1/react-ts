import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

const itemsArray = [
    {title: 'Moscow', value: '1'},
    {title: 'Baki', value: '2'},
    {title: 'New-York City', value: '3'},
    {title: 'Boston', value: '4'},
    {title: 'Barcelona', value: '5'}
]

export const SelectWithValue = () => {

    const [value, setValue] = useState('2')

    return <Select value={value} onChange={setValue} items={itemsArray}/>
}


export const SelectWithoutValue = () => {

    const [value, setValue] = useState('')

    return <Select value={value} onChange={setValue} items={itemsArray}/>
}