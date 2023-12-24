import React from 'react'
import Style from './Task.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Task() {
  return (
    <>
      <div className='container-fluid m-4 ' id={Style.task} >
        <div className='text-center '>
          <h1> Learn 4.0 Technologies </h1>
          <br></br>
          <h4> Get Trained by alumini of IIt's and top companies like Amazon , Microsoft, Intel , Nividia , Qualcomm , etc.. Learn directly from professsionals involved in product developement </h4>
          <br></br>
        </div>
        <Container className='d-flex flex-column align-items-center'>
          <Row>
            <Col>
              <Card class='text-align-justify' className={Style.card1} style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>Data Scientist</Card.Title>
                  <Card.Text>
                    Data Scientist gather and analyze large sets of structured and unstructured data.
                  </Card.Text>
                  <img class='float-end' src='https://img.freepik.com/premium-photo/futuristic-digital-image-reflecting-concept-data-science-artificial-intelligence_986714-4501.jpg' width='80px' alt='Loading'/>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card class='text-align-justify'className={Style.card2} style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>IOT Developer</Card.Title>
                  <Card.Text>
                    IOT developers are professionals who can develop,manage and monitor devices.
                  </Card.Text>
                  <img class='float-end' src='https://pub.mdpi-res.com/sustainability/sustainability-13-09463/article_deploy/html/images/sustainability-13-09463-g001-550.jpg?1629885931' width='80px'  alt='Loading'/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Row className={Style.row}>
            <Col>
              <Card class='text-align-justify' className={Style.card3} style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>VR Developer</Card.Title>
                  <Card.Text>
                    A VR developer creates completely new digital environments that prople can see.
                  </Card.Text>
                  <img class='float-end' src='https://miro.medium.com/v2/resize:fit:1400/0*mUtMymdvqdhVS9v0.jpg' width='110px' alt='Loading'/>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card class='text-align-justify' className={Style.card4} style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>ML Engineer</Card.Title>
                  <Card.Text>
                    Machine Learning engineers and developers feed data into models defined by data scientists.
                  </Card.Text>
                  <img class='float-end' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3YP51sGDyhR9JGduDUlE6bF4PzeFDHa9Ww&usqp=CAU' width='99.5px' alt='Loading'/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </>

  )
}

export default Task