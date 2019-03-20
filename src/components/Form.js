import React, { Component } from "react";
import fire from "./fire";
import TextInput from "./TextInput";

import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";

class Form extends Component {
  constructor() {
    super();
    this.loginForm = FormBuilder.group({
      searchValue: ["", Validators.required]
    });
  }

  addMessage = e => {
    e.preventDefault();
    if (
      this.loginForm.value.searchValue.length > 1 &&
      this.loginForm.value.searchValue.length <= 100
    ) {
      const date = new Date(),
        time = date.toString().slice(16, 21),
        timeDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${time}`,
        itemsRef = fire.database().ref("BD"),
        item = {
          title: this.loginForm.value.searchValue,
          time: timeDate
        };
      itemsRef.push(item);
      this.loginForm.reset();
    } else {
      alert("Please enter more than 1 character but not more than 100");
    }
  };

  render() {
    return (
      <div className="row">
        <FieldGroup
          control={this.loginForm}
          render={() => (
            <form className="form-inline col" onSubmit={this.addMessage}>
              <FieldControl
                name="searchValue"
                render={TextInput}
                meta={{
                  label: "I'm looking for",
                  placeholder: "Enter your search request"
                }}
              />
              <button
                className="btn btn-primary input-group shadow"
                type="submit"
              >
                &#x1F50D; FIND
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default Form;
