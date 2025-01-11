import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VodList from './vodList'
import VodStrip from './vodStrip'
import './home.css'



function Home() {

    const [querys] = useSearchParams();
    const[ar,setAr] = useState([])

    useEffect(() => {
        let _searchQ = querys.get("s") || "movie";
        doApi(_searchQ);
    }, [querys])

    const doApi = async (_searchQ) => {
        
        const maxPages = 10;
        const requests = [];
        for (let i = 1; i <= maxPages; i++) {
            const url = `https://www.omdbapi.com/?s=${_searchQ}&page=${i}&apikey=76f47d09`;
            requests.push(fetch(url).then(resp => resp.json()));
        }

        const results = await Promise.all(requests);
        const movies = results
        .filter(result => result.Response === "True") 
            .flatMap(result => result.Search);

        console.log(movies);
        setAr(movies);
    }

    return (
        <React.Fragment>
            <VodStrip />
            <VodList vod_ar={ar}/>
        </React.Fragment>
    )
}

export default Home
