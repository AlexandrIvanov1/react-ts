import React from 'react';

import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <UncontrolledAccordion title={'Hello'}/>
