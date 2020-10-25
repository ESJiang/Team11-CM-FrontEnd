import React, {Component} from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import "./styles/_home.scss";
import DrawerRouterContainer from "./layout/DrawerRouterContainer";
import {withRouter} from "react-router-dom";


class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: "",
            // user:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(){
        console.log("1234567", this.state.password);
        let bodyFormData = new FormData();
        bodyFormData.set('username',this.state.username);
        bodyFormData.set('password', this.state.password);

        axios({
                method: "post",
                // url: "http://localhost:8080/login",
                url:"https://coachingmate-backend2020.herokuapp.com/login",
                headers: {
                    // "Accept": 'application/json',
                    // "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                     
                },
                data: bodyFormData,
                // mode: "no-cors",
            }
        )
        .then((res)=>{
            console.log("response",res)
            // this.setState({user: res.data})
            // console.log('user is ',this.state.user)
            // redirect to home page
            this.props.history.push({
                pathname:'/Home',
                state: {user: res.data,
                        username: res.data.username}
            })
        })
        .catch(error=>
            console.log("error", error))
    }


    render(){
        return(
            <div>
                <img className="rounded-lg background-pic" src="/1.jpg" alt="bgPic"/>
                    <div
                        className="p-md-4 rounded-lg login-wrapper"
                        style={{
                            backgroundColor: "#C7EDCC",
                        }}
                    >
                    <div className="m-4">
                        <h2>Welcome to CM Dashboard</h2>
                        <div className="pt-md-3">
                            <p className="d-inline">Username:</p>{' '}
                        <input
                            className="d-inline"
                            name="username"
                            type="username"
                            onChange={this.handleChange}
                            // placeholder="please input your username"
                            value={this.state.username}
                            required
                        />
                        </div>
                        <div className="py-md-3">
                        <p className="d-inline">Password:</p>{' '}
                        <input
                            className="d-inline"
                            name="password"
                            type="password"
                            // placeholder="please input your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        </div>
                        <Button 
                        type="submit"
                        variant="success"
                        className="button-home"
                        onClick={this.handleSubmit}
                        > 
                            Log in 
                        </Button>
                </div>
                </div>
            </div>
        
        )
    }

}

export default withRouter(Login);