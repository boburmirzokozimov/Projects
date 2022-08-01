import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Singlepage from "./components/Singlepage";
import Posts from "./components/Posts";
import Editpost from "./components/Editpost";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
