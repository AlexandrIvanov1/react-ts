import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export function Accordion(props: AccordionType) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
            {props.collapsed ? '' : <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}