import React from 'react'
import AllItems from './_all_items.js.jsx'
import NewItem from './_new_item.js.jsx'

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <AllItems />
                <NewItem />
            </div>
        );
    }
};