import React from "react";
import { useHistory } from "react-router";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
//import { connectBackends } from "./services/dataService";

const newInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {fieldRenderProps.visited && fieldRenderProps.validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

export default function Login() {
    const history = useHistory();
    const dologin=(e)=>{
        history.push('/Home')
    };
    return (
        <Form
            //onSubmit={(e) => alert(JSON.stringify(e, null, 2))}
            onSubmit={dologin}
            render={(formRenderProps) => (
                <FormElement style={{ maxWidth: 1000 }}>
                    <fieldset className={"k-form-fieldset"}>
                        <legend className={"k-form-legend"}>
                            Please fill in the fields:
                        </legend>
                        <div className="mb-3">
                            <Field
                                name={"Username"}
                                component={newInput}
                                label={"Username"}
                                validator={(value) =>
                                    new RegExp(/Wombat/).test(value)
                                        ? ""
                                        : "Please enter a valid Username."
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <Field
                                name={"Password"}
                                component={newInput}
                                label={"Password"}
                                validator={(value) =>
                                    new RegExp(/abc/).test(value)
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
