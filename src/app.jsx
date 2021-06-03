import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/sidebar';
import MainContent from './components/main-contents';

class App extends Component {
    render() {
        return (
            <Container className='my-5'>
                <Row>
                    <Col md={4}>
                        <Sidebar />
                    </Col>
                    <Col md={8}>
                        <MainContent />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;