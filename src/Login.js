import React, {Component} from "react";
import axios from "axios";


class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(){
        // const {username, password} = this.state;
        console.log("1234567", this.state.password);

        axios({
                method: "post",
                url: "http://localhost:8080/login",
                // url:"https://coachingmate-backend2020.herokuapp.com/login",
                headers: {
                    // "Accept": 'application/json',
                    // "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                     
                },
                data:{
                    username: this.state.username,
                    password: this.state.password,
                },
                // mode: "no-cors",
                
            }
        )
        .then((res)=>{
            // res.set('Access-Control-Allow-Origin','*');
            // res.header("Access-Control-Allow-Origin", "*");
            // res.header("Access-Control-Allow-Credentials", "true");
            // res.header("Access-Control-Allow-Methods", "GET,POST");
            // res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');
            console.log("response",res)
        })
        .catch(error=>
            console.log("error", error))
    }


    render(){
        return(
            
            <div>
                <h2>Welcome to CM Dashboard</h2>
                <input
                    name="username"
                    type="username"
                    onChange={this.handleChange}
                    // placeholder="please input your username"
                    value={this.state.username}
                    required
                /><br></br>
                <input
                    name="password"
                    type="password"
                    // placeholder="please input your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                /><br></br>
                <button type="submit"
                onClick={this.handleSubmit}> Log in </button>
            </div>
        )
    }

}

export default Login;