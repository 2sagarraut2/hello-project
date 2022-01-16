import React from "react";

const Edit = (props) => {
    const { name, handleNameChange } = props;

    return (
        <div>
            <h2>Edit component</h2>
            <label htmlFor="name">Enter Name: </label>
            <input
                type="text"
                name="sample"
                id="name"
                value={name}
                onChange={handleNameChange}
            />
        </div>
    );
};
export default Edit;
