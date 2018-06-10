import React from 'react'
import AllItems from './_all_items.js.jsx'
import NewItem from './_new_item.js.jsx'
import $ from "jquery";

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        // this.removeItemClient = this.removeItemClient.bind(this);
    }

    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    }

    handleSubmit(item) {
        let newState = [item].concat(this.state.items);
        this.setState({ items: newState });
    }

    handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success: () => {
                this.removeItemClient(id);
            }
        });
    }

    removeItemClient(id) {
        let newItems = this.state.items.filter((item) => {
            return item.id != id;
        });
        this.setState({ items: newItems });
    }

    handleUpdate(item) {
        $.ajax({
                url: `/api/v1/items/${item.id}`,
                type: 'PUT',
                data: { item: item },
                success: () => {
                    this.updateItems(item);
                }
            }
        )
    }

    updateItems(item) {
        let items = this.state.items;
        let old = items.find(function(element){
            return element.id == item.id;
        });
        let index = items.indexOf(old);
        if (~index) {
            items[index] = item;
        }
        this.setState({items: items });
    }

    render() {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items}
                          handleDelete={this.handleDelete}
                          onUpdate={this.handleUpdate}/>
            </div>
        );
    }
};