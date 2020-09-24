import React, {Component}  from "react";
// import { user } from "./layout/DrawerRouterContainer";
import "./styles/_home.scss";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Qs from 'qs';

export default class Home extends React.Component <{}, { username: string, redirect: string}>{
    
    constructor(props) {
        super(props);
        this.state = {
           username:"",
           redirect:"",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlePermission = this.handlePermission.bind(this);
    }
    
    handlePermission = () => {
        console.log(this.state.username)
        axios({
            method: "get",
            url: "http://localhost:8080/auth/requestToken",

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            },
            data:{
                username: Qs.stringify(this.state.username),
            },
        }).then((res)=>{
            // console.log(res.headers)
            console.log("URL", res)
            console.log("data",res.data.url)
            this.setState({redirect: res.data.url })
            // res.headers("Access-Control-Allow-Origin", "*");
            // res.headers("Access-Control-Allow-Credentials", "true");
            // res.headers("Access-Control-Allow-Methods", "GET,POST");
            // res.headers('Access-Control-Allow-Headers', 'Origin, Content-Type');
        })
           .catch(error=>
            console.log("error", error)) 
    }

    handleChange (e) {
        this.setState({username: e.target.value})
    }

    render(){
        return (
            <div>
                <div
                    className="p-md-4 rounded-lg welcome-wrapper"
                    style={{
                        backgroundColor: "#C7EDCC",
                    }}
                >
                    <div className="m-4">
                    <h2>
                        <b>Welcome to Garmin Dashboard</b>
                    </h2>
                    <h4>
                    {new Date().getDate()}/{new Date().getMonth() + 1}/
                        {new Date().getFullYear()}
                    </h4>
                    <br></br>
                    
                    <h4>Please provide a unique username!</h4>
                    <input
                        className="button-home"
                        name="username"
                        type="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    /><br></br><br></br>
                    

                    <h4 >Would you like to give permission to Garmin Connect?</h4>
                    <div className="row">
                        <div className="col">
                            <Button
                                className="button-home"
                                variant="success"
                                onClick={this.handlePermission}
                                href={this.state.redirect}
                            >
                                Sure, connect now!
                            </Button>
                        </div>
                        <div className="col">
                            <Button 
                                className="button-home"
                                variant="secondary"
                                href="/">
                                No, will try later!
                            </Button>
                        </div>
                    </div>

                    </div>
                    
                </div>

            </div>
        );
}}
