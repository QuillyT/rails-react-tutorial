import React from "react";

export default class AllItems extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let items= this.props.items.map((item) => {
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