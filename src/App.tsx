import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

type AppTitleType = {
    title: string
}

function App() {

    console.log('App rendered')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let[collapsed, setCollapsed] = useState(false)

    let [on, setOn] = useState(false)

    return (
        <div style={{margin: '30px'}}>
            {/*<AppTitle title={'This is APP Component'}/>*/}
            {/*<Accordion title={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {/*<Accordion title={'List'} collapsed={true}/>*/}
            {/*<AppTitle title={'Hello'}/>*/}
            {/*<Rating value={ratingValue} setRating={setRatingValue}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrolledOnOff />*/}
            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
        </div>
    );
}

function AppTitle(props: AppTitleType) {
    console.log('AppTitle rendered')
    return <h3>{props.title}</h3>
}

export default App;
