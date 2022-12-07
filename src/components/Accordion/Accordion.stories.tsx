import React, {useState} from 'react';

import {Accordion, AccordionType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

const itemCallback = action('item was clicked')

const Template: Story<AccordionType> = (args) => <Accordion {...args}/>

// export const MenuCollapsedMode = Template.bind({})


export const CollapsedMode = () => <Accordion title={'Users'} collapsed={true} setCollapsed={callback} items={[]} onItemClick={itemCallback}/>
export const UnCollapsedMode = () => <Accordion title={'Users'} collapsed={false} setCollapsed={callback} items={[{title: 'Alex', value: 1}, {title: 'Artem', value: 2}, {title: 'Valera', value: 3}, {title: 'Dima', value: 4}]} onItemClick={itemCallback}/>

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => setCollapsed(!collapsed)
    return <Accordion
        title={'Users'}
        collapsed={collapsed}
        setCollapsed={changeCollapsed}
        items={[{title: 'Alex', value: 1}, {title: 'Artem', value: 2}, {title: 'Valera', value: 3}, {title: 'Dima', value: 4}]}
        onItemClick={(id) => alert(`userId: ${id}`)}/>
}
