import React from 'react'
import Header from './_header.js.jsx'
import Body from './_body.js.jsx'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
};