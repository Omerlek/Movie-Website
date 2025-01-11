import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';

export default function MovieInfo() {

    const params = useParams();
    const nav = useNavigate();
    const [item, setItem] = useState({});

    useEffect(() => {
        doApi();

    }, [])

    const doApi = async () => {
        let myUrl=`https://www.omdbapi.com/?i=${params["id"]}&apikey=76f47d09`
        let resp = await fetch(myUrl);
        let data = await resp.json();
        console.log(data);
        setItem(data);

    }

    return (
        <div className='container p-2 text-center'>
            <img src={item.Poster} alt="" className='col-md-2' />
            <h2 style={{fontWeight:'bold', fontSize:'2.7rem'}}>{item.Title} </h2>
            <div style={{fontWeight:'bold', fontSize:'1.8rem'}}>Runtime: <span style={{fontWeight:'normal'}}>{item.Runtime}</span></div>
            <div style={{fontWeight:'bold', fontSize:'1.8rem'}}>Rating: <span style={{fontWeight:'normal'}}>{item.imdbRating}</span></div>
            <div style={{fontWeight:'bold', fontSize:'1.8rem'}}>Genres: <span style={{fontWeight:'normal'}}>{item.Genre}</span></div>
            <div style={{fontWeight:'bold', fontSize:'1.8rem',lineHeight: '1',margin: '0'}} className='col-md-5 mx-auto'>Plot: <span style={{fontWeight:'normal', fontSize:'1.2rem'}}>{item.Plot}</span></div>
            <button className='btn btn-dark mt-4' onClick={()=>{
                nav(-1);
            }}>Back to list</button>
        </div>
    )
}
