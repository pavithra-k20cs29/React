import React from 'react'
import style from "./Task1.module.css"
import Card from 'react-bootstrap/Card';



const Task1 = () => {

    return (
        <div className={style.task} >
            <h1 style={{ textAlign: "center" }}> Congratulations</h1>
            <div className={style.cards}>
                <Card style={{ width: '500px', height: '400px', backgroundColor: "aqua" }}>
                    <Card.Body>
                        <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' alt='no images' />
                        <h3> Kiran </h3>
                        <h4> Vaishnavi Institution of Technology</h4>
                        <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' alt='no images' />
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Task1