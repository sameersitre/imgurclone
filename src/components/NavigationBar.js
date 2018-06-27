import React, { Component } from 'react';
import './NavigationBar.css';
import UploadForm from './UploadImageForm.js';
class NavigationBar extends Component {

    constructor() {
        super();
        this.state = {
            display: "none",

            username: "",
            password: "",
        }
    }
    btnSignInClick() {
        //add database code here to verify usernsme password
    }

    btnSubmitClick() {
        //alert("submit clicked")
        alert(this.state.username + "  " + this.state.password)
    }
    btnImageClick(){
        <UploadForm/>
    }
    usernameOnChange(event) {
        this.setState({ username: event.target.value });
    }
    passwordOnChange(event) {
        this.setState({ password: event.target.value });
    }
    render() {
        return (
            <div  >
                <ul className='leftposition' >
                    <li className="list1"><a href="#home">Home</a></li>
                    <li className="list1"><a href="#Upload" onClick={this.btnImageClick.bind(this)}>Upload Image</a></li>
                    <li ><a className="active" href="#signin" onClick={this.btnSignInClick.bind(this)}>Sign In</a></li>
                    <li ><a className="active" href="#signup" float="right" >Sign Up</a></li>

                    <li >

                        <input className="inputbox1" placeholder="username" value={this.state.inputValue} onChange={this.usernameOnChange.bind(this)} />
                        <input className="inputbox2" placeholder="password" value={this.state.inputValue} onChange={this.passwordOnChange.bind(this)} />
                        <button className="button1" >Submit</button>
                    </li>
                    <button
                        className="button1"
                        background-color="cornflowerblue"
                        float="right">
                     </button>
                </ul>



            </div>
        );
    }
}
export default NavigationBar;