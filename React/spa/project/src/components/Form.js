import React from "react";

const Form = ({ setOpenModel, openModal }) => {
    return <div className="form container">
        <div className="form">
            <button onClick={() => setOpenModel(!openModal)} className="plus">+</button>
        </div>
    </div>
};

export default Form;
