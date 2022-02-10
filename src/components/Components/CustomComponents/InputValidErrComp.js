import React from "react";
import { ErrorMessage } from "@hookform/error-message";


const InputValidErrComp = ({ errors, name, message }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={() => (
        <small className="text-danger ml-2">
          <span className="fa fa-exclamation-triangle mr-2"></span>
          {message}
        </small>
      )}
    />
  );
};

export default InputValidErrComp;
