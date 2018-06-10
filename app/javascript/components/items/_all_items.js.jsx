import React from "react";
import Item from "./_item.js.jsx";

export default class AllItems extends React.Component {

    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
    }

    handleDelete(id) {
        this.props.handleDelete(id)
    }

    onUpdate(item) {
        this.props.onUpdate(item)
    }

    render() {
        let items= this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <Item item={item}
                          handleDelete={this.handleDelete.bind(this, item.id)}
                          handleUpdate={this.onUpdate}/>
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