import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Effect() {
    const[item,setItem]=useState([]);
 
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setItem(data);
            });
    },[]);

  return (
    <>
        <div>
            {
                item.map((a,b)=>{
                    return(
                        <div id={b} className='m-2 p-3 text-center shadow'>

                            <h3>{a.title}</h3>
                            <img src={a.image} alt='Loading' style={{height:"200px"}}/>
                            <br></br>
                            <del>$999</del>  <ins>  $750 only</ins>
                            <p className='text-muted'>{a.description}</p>
                            <Link className="btn btn-success"to={`/View/${a.id}`} ></Link>

                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Effect