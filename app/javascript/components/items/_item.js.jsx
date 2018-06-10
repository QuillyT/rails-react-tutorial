import React from 'react'

export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {editable: false};
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        if(this.state.editable) {
            let id = this.props.item.id;
            let name = this.refs.name.value;
            let description = this.refs.description.value;
            let item = {id: id , name: name , description: description};
            console.log(item);
            this.props.handleUpdate(item);
        }
        this.setState({editable: !this.state.editable})
    }

    render() {
        let name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
        let description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;

        return (
            <div>
                {name}
                {description}
                <button onClick={this.props.handleDelete}>Delete</button>
                <button onClick={this.handleEdit}>
                    {this.state.editable ? "Submit" : "Edit"}
                </button>
            </div>
        );
    }
}