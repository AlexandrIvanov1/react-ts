import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionType = {
    title: string
    // collapsed: boolean
}

type AccordionTitleType = {
    title: string
    onClick: () => void
    collapsed: boolean
}

export const UncontrolledAccordion = React.memo((props: AccordionType) =>  {

    console.log('Accordion rendered')


    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => dispatch({type: TOGGLE_COLLAPSED})} collapsed={false}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
})

const AccordionTitle = React.memo((props: AccordionTitleType) => {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
})

const AccordionBody = React.memo(() => {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
})