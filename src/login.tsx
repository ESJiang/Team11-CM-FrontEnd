import React from "react";
import { useHistory } from "react-router";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import "./styles/_login.scss";
import connectBackends  from "./services/dataService";

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

export default function Login() {
    const history = useHistory();
    const dologin = (e) => {
        //let formData = new FormData();
        //formData.append('username', e.username+'');
        //formData.append('password', e.password+'');
        //connectBackends("https://coachingmate-backend2020.herokuapp.com/login", formData, history)
        connectBackends('http://localhost:8080/login?username='+e.username+'&password='+e.password, history)
        //alert(JSON.stringify(e.username));
        history.push("/Home");
    };
    return (
        <Form
            //onSubmit={dologin}
            onSubmit={dologin}
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
                        </legend>
                        <div className="mb-3">
                            <Field
                                name={"username"}
                                component={newInput}
                                label={"username"}
                                validator={(value) =>
                                    new RegExp(/Wombat/).test(value)
                                        ? ""
                                        : "Please enter a valid Username."
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <Field
                                name={"password"}
                                component={newInput}
                                label={"password"}
                                validator={(value) =>
                                    new RegExp(/123/).test(value)
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
                    <div className="xss">
                        <img src="/6.jpg" alt="login_page" />
                        <img src="/7.jpg" alt="login_page" />
                        <img src="/8.jpg" alt="login_page" />
                        <img src="/9.jpg" alt="login_page" />
                        <img src="/10.jpg" alt="login_page" />
                    </div>
                </FormElement>
            )}
        />
    );
}
