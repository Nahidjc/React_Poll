import React, { Component } from 'react'

class ParticipationForm extends Component {
    state = {
        name: '',
        selectedOption: '',
        errors: {}
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { errors, isValid } = this.validate()

        if (isValid) {
            this.props.getOpinion({
                pollId: this.props.poll.id,
                name: this.state.name,
                selectedOption: this.state.selectedOption
            })
            event.target.reset()
            this.setState({
                name: '',
                selectedOption: '',
                errors: {}
            })
        }
    }

    validate = () => {
        const errors = {}

        if (!this.state.name) {
            errors.name = 'Please Provide A Name'
        } else if (this.state.name.length > 20) {
            errors.name = 'Name'
        }

        if (!this.state.selectedOption) {
            errors.selectedOption = 'Please Select One Option'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default ParticipationForm;