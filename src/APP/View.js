import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function View() {
    const { proid } = useParams();
    const [View, setView] = useState([]);

    async function call() {
        let fetching = await fetch(`https://fakestoreapi.com/products/${proid}`);
        let converted = await fetching.json();
        console.log(converted);
        setView(converted);
    }

    useEffect(() => { call() });

    return (
        <>
            <div className='m-2 p-3 text-center shadow'>

                <h3>{View.title}</h3>
                <img src={View.image} alt='Loading' style={{ height: "200px" }} />
                <br></br>
                <del>$999</del>  <ins>  $750 only</ins>
                <p className='text-muted'>{View.description}</p>
                <Link className="btn btn-success" to={`/Main`} > BUY </Link>

            </div>
        </>
    )
}

export default View