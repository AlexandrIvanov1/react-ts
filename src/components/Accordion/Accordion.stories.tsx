import React, {useState} from 'react';

import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion title={'Hello'} collapsed={true} setCollapsed={callback}/>
export const UnCollapsedMode = () => <Accordion title={'Hello'} collapsed={false} setCollapsed={callback}/>

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Hello'} collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
}
