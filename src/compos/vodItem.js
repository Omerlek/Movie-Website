import React from 'react'
import { useNavigate } from 'react-router-dom';


function VodItem(props) {

    let item = props.item;
    const nav = useNavigate();

    const onInfoClick = () => {
        nav(`/info/${item.imdbID}`)
    }

    return (
        <div className='col-md-4 p-2'>
            <div className='border p-3 h-100 overflow-hidden shadow d-flex flex-column align-items-center text-center'>
                <img src={item.Poster} className='float-start me-3 w-55' />
                <h3>{item.Title}</h3>
                <div>Year: {item.Year}</div>
                <button onClick={onInfoClick} className='btn btn-dark mt-3'>More info</button>
            </div>
        </div>
    )
}

export default VodItem
