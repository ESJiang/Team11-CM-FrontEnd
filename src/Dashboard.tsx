import React from "react";
import DrawerRouterContainer from "./layout/DrawerRouterContainer";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/_home.scss";
import { Button } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import Qs from 'qs';
import {Alert, AlertTitle} from '@material-ui/lab';


const Dashboard = (props)=> {

    const location = useLocation();
    let username;
    let obj;
    let elements=[];
    let isShow = false;
    const[avg_speed, setAvg_speed] =useState([] as any);
    const[start_time, setStart_time] =useState([] as any);
    const [activities, setActivities] = useState([] as any);


    if (location.state){
        console.log(props)
        username = location.state.username;
        console.log('user is', username);
    }

    const getActivity = () => {
        let bodyFormData = new FormData();
        bodyFormData.set('username', username);
        // axios.get("https://coachingmate-backend2020.herokuapp.com/auth/getAllByUsername?username=${username}", {
        //     headers: {
        //                 "Access-Control-Allow-Origin": "*",
        //                 "Accept": 'application/json',
        //                 "Content-Type": "application/json",
        //                 "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        //             },
        //     params: {
        //         username: Qs.stringify(username),
        //     }
        //   })
        axios({
            method: "POST",
            url: "https://coachingmate-backend2020.herokuapp.com/activity/getAllByUsername",

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            },
            data: bodyFormData,
            // data:{
            //     username: Qs.stringify(username),
            // },
        })
        .then(function(res){
            // console.log(res.headers)
            console.log('This is ', username)
            console.log("Activities", res)
            obj = res.data;
            Object.keys(obj).map(key => {
                console.log(obj[key])
                // setActivities(activities => [...activities, obj[key]]);
                setAvg_speed(avg_speed => [...avg_speed,' { Activity '+ key, ': ', (obj[key].avg_speed)+' }']);
                setStart_time(start_time => [...start_time, ' { Activity ' + key ,': ', (obj[key].start_time)+' }']);
                console.log('hello', avg_speed)
                console.log('hello', elements);
                let i = obj[key];
                Object.keys(i).map(items =>{
                    setActivities(activities => [...activities, ' { Activity '+ key, items+': '+i[items]+' }']);
                })
                
            });

        })
           .catch(error=>
            // this.setState({isShow : true})
            console.log("error", error))
        
    }

    const goHome = () =>{
        if (username){
            props.history.push({
                pathname:'/Home',
                state: {username: username}
            })
        }
    }


    return (
        (username==null) ? (
            <a href="/">
                <h2>Please log in first! :)</h2>
            </a>) : (
        <DrawerRouterContainer>
            <div className="dash"
            style={{ backgroundColor: "#C7EDCC"}}>
                <h2>
                    <br></br>
                    <b className="m-3">Hello {username}, you can view your activity data here!</b>
                </h2>

                <Button 
                    variant="success"
                    className="m-3 button-home"
                    onClick={getActivity}
                    >
                        View all activity data
                </Button>

                <Button 
                    variant="light"
                    className="m-3 button-home"
                    onClick={goHome}
                    >
                    Return to home page
                </Button>

                <Alert severity="warning">
                        Oops! Seems you haven't uploaded any activity yet! </Alert>
                
                <div className="m-3">
                    <h3>Start time:</h3>
                    <p>{start_time}</p>
                    <h3>Average speed:</h3>
                    <p>{avg_speed}</p>

                    <h3>Your Activity Data:</h3>
                    <p>{activities.toString()}</p>
                </div>

            
            </div>
        </DrawerRouterContainer>)
    );
}

export default withRouter(Dashboard)