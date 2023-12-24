import React from 'react'
import Styles from './Task.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Task() {
    return (
        <div className={Styles.task}>
            <Container>

                <div className=''>
                <Row>
                    <Col className={Styles.text} style={{color: "white", fontSize: "70px"}}> Social Buttons </Col>
                </Row>
                <Row>
                <Col className='text-center'>   
                         <Button variant="warning"> LIKE</Button>{' '}
                         <Button variant="light"> COMMENT </Button>{' '}
                         <Button variant="primary"> SHARE </Button>{' '}
                </Col>
                </Row>
                </div>

            </Container>
        </div>
    )
}

export default Task