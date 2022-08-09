import React from 'react'
import './modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../store/booksSlice'
import { addText, addAbout, addInfo } from '../store/infoSlice'

const InputField = ({ closeModal, openModal }) => {
    const dispatch = useDispatch();

    const submitTextHandler = e => {
        dispatch(addText(e.target.value))
    }
    const submitAuthorHandler = e => {
        dispatch(addAbout(e.target.value))
    }
    const submitInfoHandler = e => {
        dispatch(addInfo(e.target.value))
    }

    const text = useSelector(state => state.info.text)
    const info = useSelector(state => state.info.info)
    const about = useSelector(state => state.info.about)

    const submitBook = (e) => {
        e.preventDefault()
        dispatch(addBook({ text, info, about }))
        dispatch(addText(''))
        dispatch(addAbout(''))
        dispatch(addInfo(''))
    }

    return (
        <>
            <div onClick={() => closeModal(!openModal)} className='modal' ></div>
            <div className='form-holder'>
                <form onSubmit={submitBook}>
                    <input type="text" value={text} onChange={submitTextHandler} id="name" placeholder='Name...' />
                    <input type="text" value={about} onChange={submitAuthorHandler} id='author' placeholder='Author...' />
                    <input type="text" value={info} onChange={submitInfoHandler} id='about' placeholder='Some info...' />
                    <br />
                    <input className='submit-btn' type="submit" value='Submit' onSubmit={() => closeModal(!openModal)} />
                    <div>
                        <span className='cancelBtn' onClick={() => closeModal(!openModal)}>X</span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default InputField
