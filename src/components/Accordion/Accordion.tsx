import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onItemClick: (value: any) => void
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const Accordion = React.memo((props: AccordionType) => {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
            {props.collapsed ? '' : <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
        </div>
    )
})

const AccordionTitle = React.memo((props: AccordionTitleType) => {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
    )
})

type AccordionBodyType = {
    items: ItemType[]
    onItemClick: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyType) => {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={() => props.onItemClick(i.value)}>{i.title}</li>)}
        </ul>
    )
})