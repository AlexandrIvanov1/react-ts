import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
    // component: Accordion
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={'Hello'}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <div>
        <input onChange={onChangeHandler}/> - {value}
    </div>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement | null>(null)

    const saveChanges = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef}/>
        <button onClick={saveChanges}>save</button> - actual value: {value}
    </div>
}