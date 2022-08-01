import React from 'react'
import './modal.css'
import { useDispatch } from 'react-redux'
import { addBook } from '../store/booksSlice'

const InputField = ({ closeModal, openModal, setText, text, author, info, setAuthor, setInfo }) => {
    const dispatch = useDispatch();

    const submitTextHandler = e => {
        setText(e.target.value, [text])
    }
    const submitAuthorHandler = e => {
        setAuthor(e.target.value)
    }
    const submitInfoHandler = e => {
        setInfo(e.target.value)
    }

    const submitBook = (e) => {
        e.preventDefault()
        dispatch(addBook({ text, author, info }))
        setText('')
        setInfo('')
        setAuthor('')
    }

    return (
        <>
            <div onClick={() => closeModal(!openModal)} className='modal' ></div>
            <div className='form-holder'>
                <form onSubmit={submitBook}>
                    <input type="text" value={text} onChange={submitTextHandler} id="name" placeholder='Name...' />
                    <input type="text" value={author} onChange={submitAuthorHandler} id='author' placeholder='Author...' />
                    <input type="text" value={info} onChange={submitInfoHandler} id='about' placeholder='Some info...' />
                    <br />
                    <input className='submit-btn' type="submit" value='Submit' onSubmit={() => closeModal(!openModal)} />
                    <div>
                        <span className='cancelBtn' onClick={() => closeModal(!openModal)}>X</span>
                    </div>в
                </form>
            </div>
        </>
    )
}

export default InputField
