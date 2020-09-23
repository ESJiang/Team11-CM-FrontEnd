import React from "react";
import { user } from "./layout/DrawerRouterContainer";
import "./styles/_home.scss";
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default class Home extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    handlePermission = () => {
    
        // axios({
        //   method: "get",
        //   url: `/auth/requestToken/`,
        // }).then((res) => {
        //     this.setState({
        //         customer_id: res.data._id,

        //     });
        // })
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
                    <h2>
                        <b>Welcome to Garmin Dashboard</b>
                    </h2>
                    <h4>
                    {new Date().getDate()}/{new Date().getMonth() + 1}/
                        {new Date().getFullYear()}
                    </h4>

                    <h4>Would you like to give permission to Garmin Connect?</h4>
                    <Button variant="success"
                        onClick={this.handlePermission}
                        >
                        Sure, connect now!
                    </Button>{' '}
                    <Button variant="secondary"
                        href="/">
                        No, will try later!
                    </Button>{' '}
                   
                
                    
                </div>

            </div>
        );
}}
