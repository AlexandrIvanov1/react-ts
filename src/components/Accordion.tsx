import React from "react";

type AccordionType = {
    title: string
}

type AccordionTitleType = {
    title: string
}

export function Accordion(props: AccordionType) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendered')
    return (
        <h3>{props.title}</h3>
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