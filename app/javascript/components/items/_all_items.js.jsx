import React from "react";
import $ from 'jquery';

export default class AllItems extends React.Component {

    constructor() {
        super();
        this.state = {items: []};
    }

    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    }

    render() {
        let items= this.state.items.map((item) => {
            return (
                <div key={item.id}>
                    <p>{item.id} {item.name} {item.description}</p>
                </div>
            )
        });

        return(
            <div>
                {items}
            </div>
        );
    }
};