import React from 'react';

import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}

const callback = action('clicked')

export const ChangeRating = () => <UncontrolledRating defaultValue={2} onChange={callback}/>