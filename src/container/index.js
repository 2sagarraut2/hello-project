import React, { useState } from "react";
import Display from "../components/Display";
import Edit from "../components/Edit";

const Home = () => {

    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        const textVal = e.target.value;
        setName(textVal);
    };

    return (
        <div>
            <Edit
                name={name}
                setName={setName}
                handleNameChange={handleNameChange}
            />
            <Display name={name} />
        </div>
    );
};
export default Home;
