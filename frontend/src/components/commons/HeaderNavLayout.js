import React from 'react'

import { Row, Col } from 'react-bootstrap'
import Header from './Header'
import Navbar from './Navbar'

const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: '#7FCEC3',
    boxShadow: '2px 0px 10px rgba(0,0,0,0.25)',
    zIndex: 1,
    textAlign: 'center',
    // padding: '2%',
    // paddingRight: '3%',
    width: 'fit-content',
}

const HeaderNavLayout = props => {

    return (
        <div>
            <Row lg="auto" md="auto" sm="auto">
                <Header />
            </Row>
            <Row>
                <Col 
                    lg="auto" md="auto" sm="auto"
                    style={navStyle} >
                    <Navbar />
                </Col>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </div>
    )
}

export default HeaderNavLayout