import React from "react";
import { useParams } from "react-router-dom";


const Editpost = () => {
    const { id } = useParams()
    return <div className="center">Edit post {id}</div>;
};

export default Editpost;
