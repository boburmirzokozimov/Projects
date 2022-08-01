import React, { useState, useEffect } from "react";
import axios from 'axios'

function FetchApi() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    const setIdHandler = (e) => {
        setId(e.target.value)
    }

    return <div>
        <ul>
            <input type="text" value={id} onChange={setIdHandler} />
            <button onClick={handleClick} type="button">Fetch Post</button>
            {
                <li>{post.title}</li>
            }
            {/* {
                post.map(item => {
                    return <li key={item.id} >{item.title}</li>
                })
            } */}
        </ul>
    </div>;
}

export default FetchApi;
