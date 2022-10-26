import React, {useState} from "react";

type AccordionType = {
    title: string
    // collapsed: boolean
}

type AccordionTitleType = {
    title: string
    onClick: () => void
    collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionType) {

    console.log('Accordion rendered')

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)} collapsed={false}/>
            {/*{collapsed ? <AccordionBody/> : ''}*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
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