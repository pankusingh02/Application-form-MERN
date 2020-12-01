/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'



class App extends Component{
    constructor(){
        super()
        this.state ={
            firstName :'',
            lastName:'',
            email:'',
            phoneNumber:''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

    }
    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }
    changeLastName(event){
        this.setState({
            lastName:event.target.value
        })
    }
    
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePhoneNumber(event){
        this.setState({
            phoneNumber:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered= {

            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber
        }

        axios.post('http://localhost:4000/app/signup',registered)
             .then(Response => console.log(Response.data))

             this.setState({
                 firstName:'',
                 lastName:'',
                 email :'',
                 phoneNumber:''
             })
    }

    render(){
        return(
            <div >
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                           
                            <div>
                            <h1>Application Form</h1>

                            <input type='text'
                            placeholder=' First Name'
                            onChange={this.changeFirstName}
                            value={this.state.firstName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder=' Last Name'
                            onChange={this.changeLastName}
                            value={this.state.lastName}
                            className='form-control form-group'
                            />
                            

                            
                            <input type='text'
                            placeholder=' E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />
                            
                            

                            <input type='text'
                            placeholder=' Phone Number'
                            onChange={this.changePhoneNumber}
                            value={this.state.phoneNumber}
                            className='form-control form-group'
                            />
                            


                           <input class="btn btn-primary" type="submit" value="Submit"/>
                           </div>

                        </form>
                    </div>
                    </div>
                </div>
        );
    }
}

export default App;