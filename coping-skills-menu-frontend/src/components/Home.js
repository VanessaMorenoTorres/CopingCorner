import React from "react";
import axios from "axios";
import { useState} from 'react';

function Home(){
    const [quote, setQuote] = useState('')

    const getQuote = () => {
        axios.get('https://api.quotable.io/random')
        .then(response => {
            // console.log(response.data.content + response.data.author) //this was to test that api was working
            setQuote(response.data.content + " -"+ response.data.author)
        }).catch(error =>{
            console.log(error)
        })
    }


    return(
        <div>
            <h2>Home Page</h2>
            <p>Welcome to our coping corner. The pupose of this app is to help individuals of all ages practice coping skills preventatively.</p>
            <div>
                <h4>Click button below for inspirational quote</h4>
                {quote && <p>{quote}</p>}
                <button onClick={getQuote}>Get Quote</button>
                
            </div>
        </div>
    );
}

export default Home;