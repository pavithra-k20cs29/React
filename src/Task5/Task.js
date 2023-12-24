import React from 'react'
import Style from './Task.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
function Task() {
  return (
    <div> 
        <Container>

            <Row>
                <Col className='text-center text-dark fs-5 fw-bold'> NOTIFICATIONS </Col>
            </Row>

            <Row>
                <div className={Style.task1}> {<FontAwesomeIcon icon={faCircleCheck} />} Information Message </div>
                <div className={Style.task2}> { <FontAwesomeIcon icon={faCircleCheck} />} Success Message </div>
                <div className={Style.task3}> { <FontAwesomeIcon icon={faBell} />} Warning Message </div>
                <div className={Style.task4}> { <FontAwesomeIcon icon={faCircleExclamation} />} Error Message </div>

            </Row>

        </Container>
    </div>
  )
}

export default Task