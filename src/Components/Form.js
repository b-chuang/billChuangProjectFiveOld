import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super();
        this.state = {
            currentTextValue: [],

        }
    }

    //when the form submits send the string from the input to App.js
    

    handleSubmit = (e) => {
/*         console.log(this.state.currentTextValue);
 */        
        e.preventDefault();
        /*         this.state.currentTextValue; */
        this.props.addToList(this.state.currentTextValue)
        this.setState({
            currentTextValue: this.state.currentTextValue,
            
        })
    }

    //1) need capture the string as completed. Not each time, on submit
    //on submit, need to add item to a list in state
    //rendering the list


    render() {

     /*    console.log(this.state);
        console.log(this.props); */
        
        return (
            <div> 
                <form onSubmit={this.props.onSubmit}>
                    <input 
                    type="text" 
                    onChange={this.props.onChange}
                    value={this.props.currentTextValue} />
                    
                    <input 
                    type="submit" /* onSubmit={this.handleChange} *//>
                </form>
                {
                    this.props.showResults === true ? (
                        <span>{this.state.currentTextValue} {this.props.count}</span>
                    ) : null
                }

                <h1>Latest brushers</h1>
                
            </div>
        )
    }
}

export default Form;