import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputValidErrComp from "../CustomComponents/InputValidErrComp";

const EditUserPaswrdModal = ({ isModal, setIsModal, user_id,updatePassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    //   errors,
    watch,
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (formData) => {
    if (formData.newPassword === formData.confirmPassword) {
      console.log("match");
      updatePassword(user_id, formData);
    } else {
      toast.error("Password doesn't match.");
    }
  };

  return (
    <>
      <div
        className={`modal fade bd-example-modal-lg ${
          isModal === "update_user_password"
            ? "d-block show background-clr-modal"
            : ""
        }`}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Update User Password
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsModal("")}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="password"
                        name="newPassword"
                        className="form-control"
                        placeholder="New Password"
                        {...register("newPassword", {
                          required: true,
                          minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters",
                          },
                        })}
                      />
                      {/* <InputValidErrComp
                        errors={errors}
                        name={"newPassword"}
                        message={message}
                      /> */}
                      {errors.newPassword && (
                        // <p>{errors.newPassword.message}</p>
                        <small className="text-danger ml-2">
                          <span className="fa fa-exclamation-triangle mr-2"></span>
                          {errors.newPassword.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                          required: true,
                        })}
                      />
                      <InputValidErrComp
                        errors={errors}
                        name={"confirmPassword"}
                        message={"Confirm password is required"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-round btn-default"
                        data-dismiss="modal"
                        onClick={() => setIsModal("")}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="btn btn-round btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserPaswrdModal;
