import BookList from "./components/BookList";
import Form from "./components/Form";
import InputField from "./components/InputField";
import React, { useState } from "react";


function App() {
  const [openModal, setOpenModel] = useState(false)
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  return (
    <div className="App">
      <header>
        Book library
      </header>
      <Form setOpenModel={setOpenModel} openModal={openModal} />
      {openModal && <InputField author={author} info={info} setAuthor={setAuthor} setInfo={setInfo} text={text} setText={setText} closeModal={setOpenModel} openModal={openModal} />}
      <BookList />
    </div>
  );
}

export default App;
