import React from "react";
//import ReactDOM from "react-dom";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
//import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";

export default function Login() {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement style={{ maxWidth: 1000 }}>
                    <fieldset className={"k-form-fieldset"}>
                        <legend className={"k-form-legend"}>
                            Please fill in the fields:
                        </legend>
                        <div className="mb-3">
                            <Field
                                name={"Username"}
                                component={Input}
                                label={"Username"}
                            />
                        </div>

                        <div className="mb-3">
                            <Field
                                name={"Password"}
                                component={Input}
                                label={"Password"}
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
