import React from "react";
import { useForm } from "react-hook-form";
import * as actions from "../../../actions/CustomAction";
import { connect } from "react-redux";
import InputValidErrComp from "./InputValidErrComp";

const EditUserModal = ({ isModal, setIsModal, data, updateUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: data.user_name,
      phone: data.user_phone,
      role_id: data.role_id,
    },
  });

  const onSubmit = (formData) => {
    updateUser(data.user_id, formData)
  };

  let accounts = [
    { type_name: "Free", type_id: 1 },
    { type_name: "Bronze", type_id: 2 },
    { type_name: "Bronze plus", type_id: 3 },
    { type_name: "Silver", type_id: 4 },
    { type_name: "Gold", type_id: 5 },
  ];

  return (
    <>
      <div
        className={`modal fade bd-example-modal-lg ${
          isModal === "update_user" ? "d-block show background-clr-modal" : ""
        }`}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Update User Detail
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
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        {...register("username", {
                          required: true,
                        })}
                      />
                      <InputValidErrComp
                        errors={errors}
                        name={"username"}
                        message={"Username is required"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        {...register("phone")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect01"
                          >
                            Account Type
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          {...register("role_id", {
                            required: "Account type is required",
                          })}
                          onChange={(e) => console.log(e.target.value)}
                        >
                          <option defaultValue disabled>
                            Choose...
                          </option>
                          {accounts.map((item, i) => {
                            return (
                              <option key={i} value={item.type_id}>
                                {item.type_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <InputValidErrComp
                        errors={errors}
                        name={"role_id"}
                        message={"Account type is required"}
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
              {/* <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="name"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div> */}
              {/* <p>
                Cras mattis consectetur orbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </p> */}
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-round btn-default"
                data-dismiss="modal"
                onClick={() => setIsModal(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-round btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

// export default EditUserModal;

// const mapStateToProps = ({ UserReducer }) => {
//   return { UserReducer };
// };
export default connect(null, actions)(EditUserModal);
