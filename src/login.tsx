import React from "react";
import { useHistory } from "react-router";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { user } from "./layout/DrawerRouterContainer";
import { Input } from "@progress/kendo-react-inputs";
import {connectBackends}  from "./services/dataService";
import "./styles/_login.scss";

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
        user.name=connectBackends('http://localhost:8080/login?username='+e.username+'&password='+e.password, history)['username']
        //user.name = '123'
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
