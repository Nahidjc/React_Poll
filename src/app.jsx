import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/sidebar';
import MainContent from './components/main-contents';
import POLLS from './data/polls';
import shortid from 'shortid';
class App extends Component {
    state ={
        polls:[],
        selectedPoll:{},
        searchTerm:''
    }


    componentDidMount(){
        this.setState({polls:POLLS})
    }


    addNewPoll = poll =>{
        poll.id = shortid.generate()
        poll.created = new Date()
        poll.totalVote = 0
        poll.opinions = []
        this.setState({
            polls:this.state.polls.concat(poll)
        })
    }

    updatePoll = updatedPoll =>{
        const polls = [...this.state.polls];
        const poll = polls.find(p => p.id === updatedPoll.id);
        poll.title = updatedPoll.title;
        poll.description  = updatedPoll.description;
        poll.options = updatedPoll.options;
        this.setState({polls});
    }

    deletePoll = pollId =>{
        const polls = this.state.polls.filter(p => p.id !== pollId);
        this.setState({polls,selectedPoll:{}});
    }
    selectedPoll = pollId =>{
        const poll = this.state.polls.find(p => p.id === pollId);
        this.setState({selectedPoll:poll});
    }
    handleSearch=searchTerm =>{

    }
    render() {
        return (
            <Container className='my-5'>
                <Row>
                    <Col md={4}>
                        <Sidebar
                        polls={this.state.polls}
                        searchTerm={this.state.searchTerm}
                        handleSearch={this.handleSearch}
                        selectedPoll={this.selectedPoll}
                        addNewPoll={this.addNewPoll}
                         />
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