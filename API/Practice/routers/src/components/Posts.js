import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Singlepage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    })

    const { id } = useParams()

    return <div>
        Singlepage {id}
        {posts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
                <li>{post.title}</li>
            </Link>
        ))}
    </div>;
};

export default Singlepage;

