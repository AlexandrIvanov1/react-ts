import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

type AppTitleType = {
    title: string
}

function App() {
    console.log('App rendered')
    return (
        <div>
            <AppTitle title={'This is APP Component'}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'List'} collapsed={true}/>
            <AppTitle title={'Hello'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function AppTitle(props: AppTitleType) {
    console.log('AppTitle rendered')
    return <h3>{props.title}</h3>
}

export default App;
