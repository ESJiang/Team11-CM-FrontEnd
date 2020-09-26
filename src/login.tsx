import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { value, CustomNodeJsGlobal } from "./data/models";

declare var global: CustomNodeJsGlobal;

const newInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
        <Input {...others} />
        {fieldRenderProps.visited && fieldRenderProps.validationMessage && (
            <Error>{validationMessage}</Error>
            )}
        </div>
        );
};


export default class Login extends React.Component<{},value> {
    constructor(props) {
        super(props);
        this.state = {
            username:''
        };
    }
    ClickEvent = (e) => {
            fetch("http://localhost:8080/login?username="+e.username+"&password="+e.password,{
                method: "post",
                headers:
                {
                'Accept': "application/json",
                "Content-Type": "application/json, charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
                },
                body:JSON.stringify({
                    'username': e.username,
                    'password': e.password})
                ,
            }
        )
        .then((res) => res.json())
        .then((jsondata)=>{
            console.log(jsondata)
            this.setState({username:jsondata['username']})
        })
        .catch((error)=>{
            console.error(error);
        })
        window.location.href="/Home"
    }

    componentDidUpdate(){
        global.name = this.state.username;
    }

    render(){
        return (
            <Form
            onSubmit={this.ClickEvent}
            render={(formRenderProps) => (
                <FormElement
                style={{
                    backgroundColor: "#C7EDCC",
                    textAlign: "center",
                    maxWidth: 3000,
                }}
                >
                <fieldset className={"k-form-fieldset"}>
                <legend>
                <i>Please fill in the fields:</i>
                <p>{this.state.username}</p>
                </legend>
                <div className="mb-3">
                <Field
                name={"username"}
                component={newInput}
                label={"username"}
                validator={(value) =>
                    new RegExp(/a/).test(value)
                    ? ""
                    : "Please enter a valid Username."
                }
                />
                </div>
                <div className="mb-3">
                <Field
                name={"password"}
                component={newInput}
                type={"password"}
                label={"password"}
                validator={(value) =>
                    new RegExp(/1/).test(value)
                    ? ""
                    : "Please enter a valid Password."
                }
                />
                </div>
                </fieldset>
                <div className="k-form-buttons">
                <button
                type={"submit"}
                className="k-button"
                disabled={!formRenderProps.allowSubmit}
                >
                Submit
                </button>
                </div>
                </FormElement>
                )}
            />
            );
    }
}