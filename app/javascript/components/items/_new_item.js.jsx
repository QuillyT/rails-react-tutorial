import React from "react";
import $ from 'jquery';

export default function NewItem(props) {

    let itemInput = React.createRef();

    function handleClick() {
        // console.log("Clicked");
        let name = $(itemInput.current).find("[name='name']").val();
        let description = $(itemInput.current).find("[name='description']").val();
        // console.log(name + " " + description);

        $.ajax({
            url: "/api/v1/items",
            type: "POST",
            data: { item: { name: name, description: description } },
            success: (item) => {
                props.handleSubmit(item);
            }
        });
    }

    return (
        <div ref={itemInput}>
            <input name="name" placeholder='Enter the name of the item' />
            <input name="description" placeholder='Enter a description' />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
};