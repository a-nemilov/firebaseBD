import React from "react";

const TextInput = ({ handler, meta }) => (
  <div className="form-group mr-auto">
    <label className="mr-2">{meta.label}: </label>
    <input
      className="form-control"
      placeholder={meta.placeholder}
      {...handler()}
    />
  </div>
);

export default TextInput;
