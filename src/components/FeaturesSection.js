import * as React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

function FeaturesSection() {

    return (

        <div id='FeaturesSection' className='custom-section-size py-2 mx-auto px-3 px-md-0 border-bottom'>

            <h1 className='mt-2 mb-4' style={{color:'#e6a800'}}>Product Features</h1>

            <Row className='row-cols-1 row-cols-md-3 g-4 mb-4 custom-row'>

                <Card className='custom-feature-card p-0 me-md-4 border-0'>

                    <Row className='g-0'>
      
                        <Col xs={2} md={2} className='d-flex justify-content-center p-1'>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="30"
                                width="30"
                                fill="currentColor"
                                class="bi bi-check2-circle"
                                viewBox="0 0 16 16">
                                <path
                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path
                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>

                        </Col>

                        <Col xs={10} md={10}>

                            <h4 className='mb-0'>Easy to use</h4>

                            <p className=''>So easy to use, even your dog could do it.</p>

                        </Col>

                    </Row>

                </Card>

                <Card className='custom-feature-card p-0 me-md-4 border-0'>

                    <Row className='g-0'>

                        <Col xs={2} md={2} className='d-flex justify-content-center p-1'>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="30"
                                fill="currentColor"
                                class="bi bi-mortarboard"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                                <path
                                    d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                            </svg>
                                                
                        </Col>

                        <Col xs={10} md={10}>

                            <h4 className='mb-0'>Elite Clientele</h4>

                            <p className=''>We have all the dogs, the greatest dogs.</p>

                        </Col>

                    </Row>

                </Card>

                <Card className='custom-feature-card p-0 me-md-4 border-0'>

                    <Row className='g-0'>

                        <Col xs={2} md={2} className='d-flex justify-content-center p-1'>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="30"
                                fill="currentColor"
                                class="bi bi-arrow-through-heart"
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z" />
                            </svg>
                                
                        </Col>

                        <Col xs={10} md={10}>

                            <h4 className='mb-0'>Guaranteed to work</h4>

                            <p className=''>Find the love of your dog's life or your money back.</p>

                        </Col>

                    </Row>

                </Card> 

                <Card className='custom-feature-card p-0 me-md-4 border-0'>

                    <Row className='g-0'>

                        <Col xs={2} md={2} className='d-flex justify-content-center p-1'>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="30"
                                fill="currentColor"
                                class="bi bi-arrow-through-heart"
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z" />
                            </svg>
                                
                        </Col>

                        <Col xs={10} md={10}>

                            <h4 className='mb-0'>mattis molestie a</h4>

                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>

                        </Col>

                    </Row>

                </Card>                         

            </Row>

        </div>
        
    );

}

export default FeaturesSection;
