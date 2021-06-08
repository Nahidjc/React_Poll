import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/sidebar';
import MainContent from './components/main-contents';
import POLLS from './data/polls';
import shortid from 'shortid';
class App extends Component {
    state = {
        polls: [],
        selectPoll: {},
        searchTerm: ''
    }


    componentDidMount() {
        this.setState({ polls: POLLS })
    }


    addNewPoll = poll => {
        poll.id = shortid.generate()
        poll.created = new Date()
        poll.totalVote = 0
        poll.opinions = []
        this.setState({
            polls: this.state.polls.concat(poll)
        })
    }

    updatePoll = updatedPoll => {
        const polls = [...this.state.polls];
        const poll = polls.find(p => p.id === updatedPoll.id);
        poll.title = updatedPoll.title;
        poll.description = updatedPoll.description;
        poll.options = updatedPoll.options;
        this.setState({ polls });
    }

    deletePoll = pollId => {
        const polls = this.state.polls.filter(p => p.id !== pollId);
        this.setState({ polls, selectPoll: {} });
    }
    selectedPoll = pollId => {
        const poll = this.state.polls.find(p => p.id === pollId);
        this.setState({ selectPoll: poll });
    }
    handleSearch = searchTerm => {

    }

    getOpinion = (response) => {
        const { polls } = this.state;
        const poll = polls.find(p => p.id === response.pollId);
        const option = poll.opinions.find(
            o => o.id === response.selectedOption
        );
        poll.totalVote++;
        option.vote++;
        const opinion = {
            id: shortid.generate(),
            name: response.name,
            selectedOption: response.selectedOption
        }
        poll.opinions.push(opinion);
        this.setState({ polls });

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
                        <MainContent

                            poll={this.state.selectPoll}
                            getOpinion={this.getOpinion}
                            updatePoll={this.updatePoll}
                            deletePoll={this.deletePoll}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;