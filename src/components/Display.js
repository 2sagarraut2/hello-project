import React from "react";

const Display = (props) => {
    const { name } = props;
    return (
        <div>
            <h3>{name ? "Hello " : "" }{name}</h3>
        </div>
    );
};
export default Display;
