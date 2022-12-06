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

export const ControlledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <input value={value} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={value} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<undefined | string>()

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select name="name" id="1" value={value} onChange={onChange}>
            <option>null</option>
            <option value="1">Moscow</option>
            <option value="2">Baki</option>
            <option value="3">New-York</option>
        </select>
    )
}