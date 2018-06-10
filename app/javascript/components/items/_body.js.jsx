import React from 'react'
import AllItems from './_all_items.js.jsx'
import NewItem from './_new_item.js.jsx'
import $ from "jquery";

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    }

    handleSubmit(item) {
        let newState = [item].concat(this.state.items);
        this.setState({ items: newState });
    }

    render() {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items}/>
            </div>
        );
    }
};