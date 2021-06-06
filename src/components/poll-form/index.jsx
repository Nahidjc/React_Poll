import React, { Component } from 'react';
import shortid from 'shortid';

const defaultOptions = [
    { id: shortid.generate(), value: '', vote: 0 },
    { id: shortid.generate(), value: '', vote: 0 }

]

class PollForm extends Component {
    state = {
        title: '',
        description: '',
        options: defaultOptions
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOptionChange = (event, index) => {
        const options = [...this.state.options];
        options[index].value = event.target.value;
        this.setState({ options })
    }

    createOption = () => {
        const { options } = this.state;
        if (options.length < 5) {
            options.push({
                is: shortid.generate(),
                value: '',
                vote: 0
            })
            this.setState({ options });
        } else {
            alert('You can Create max 5 options')
        }
    }

    deleteOptions = index => {
        const { options } = this.state
        if (options.length > 2) {
            options.splice(index, 1)
            this.setState({ options })
        } else {
            alert('You must have at least two options')
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {isValid,errors} = this.validate()

        if(isValid){
            const { title , description, options} = this.state
            this.props.submit({
                title,
                description,
                options
            })
            event.target.reset()
            this.setState({
                title:'',
                description:'',
                options:defaultOptions,
                errors:{}
            })

        }else{
            this.setState({errors})
        }
    }

    validate = () => {
        const errors = {}
        const { title, description, options } = this.state

        if (!title) {
            errors.title = 'Please Provide A Title'

        } else if (title.length < 20) {
            errors.title = 'Title Too Short'
        } else if (title.length > 100) {
            errors.title = 'Title Too Long'
        }

        if (!description) {
            errors.description = 'Please Provide A Description'
        } else if (description.length > 500) {
            errors.description = 'Description Too Long'
        }

        const optionErrors = []
        options.forEach((opt, index) => {
            if (!opt.value) {
                optionErrors[index] = 'Option Test Empty'
                // optionErrors.push('Option Test Empty')
            } else if (opt.value.length > 100) {
                optionErrors[index] = 'Option Text Too Long'
                // optionErrors.push('Option Text Too Long')
            }
        })


        if (optionErrors.length > 0) {
            errors.options = optionErrors
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
        );
    }
}

export default PollForm;