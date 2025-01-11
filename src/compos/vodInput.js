import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function VodInput() {

    const inputRef = useRef();
    const nav = useNavigate();

    const onKeyBoardClick = (e) => {
        if (e.key == "Enter") {
            onSearchClick();
        }
    }
    const onSearchClick = () => {

        let inpputValue = inputRef.current.value;
        nav(`/?s=${inpputValue}`);
    }

    return (
        <header className='container-fluid bg-dark p-2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='logo col-auto'>
                        <h2 className='text-white'>My VOD</h2>
                    </div>
                    <nav className='d-flex col-md-4'>
                        <input onKeyDown={onKeyBoardClick} ref={inputRef} placeholder='search...' type='search' className='form-control' />
                        <button onClick={onSearchClick} className='btn btn-warning'>Search</button>
                    </nav>
                    <div className='col text-end'>
                        <div className="d-inline-flex align-items-center">
                            <Link to="/" className='nav-link text-white text-decoration-none mx-2 fs-3'>Home</Link>
                            <span className="text-white mx-2 fs-3">|</span>
                            <Link to="/about" className='nav-link text-white text-decoration-none mx-2 fs-3'>About</Link>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .nav-link:hover {
                        color: gold !important;
                    }
                `}
            </style>
        </header>
    )
}

export default VodInput
