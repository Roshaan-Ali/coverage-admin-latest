import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../../actions/CustomAction";

const AdminProfile = ({ changePassword }) => {
  const [password, setPassword] = useState({
    currentPaswrd: "",
    newPaswrd: "",
    confirmPaswrd: "",
  });
  const [isApiCall, setisApiCall] = useState(false);
  const _getState = (key) => {
    return password[key];
  };

  const _setState = (key, value) => {
    setPassword({ ...password, [key]: value });
  };

  const _updatePassword = () => {
    if (
      password.newPaswrd === "" ||
      password.confirmPaswrd === "" ||
      password.currentPaswrd === ""
    ) {
      toast.error("All fields are required!");
    } else if (password.newPaswrd !== password.confirmPaswrd) {
      toast.error("New password and confirm password doesn't matched!");
    } else if (password.newPaswrd.length < 8) {
      toast.error("Password length should be 8 or greater");
    } else {
      setisApiCall(true);
      changePassword({
        old_password: password.currentPaswrd,
        new_password: password.confirmPaswrd,
      }).then(() => {
        // console.log("hittttting");
        setisApiCall(false);
        setPassword({
          currentPaswrd: "",
          newPaswrd: "",
          confirmPaswrd: "",
        });
      });
    }
  };

  return (
    <>
      <div className="container-fluid d-flex h-100 justify-content-center">
        <div className="block-header" />
        <div className="row clearfix w-100">
          <div className="col-xl-12 col-lg-12 col-md-12 my-auto">
            <div className="card">
              <div className="header">
                <h2>Change Admin Password</h2>
              </div>
              <div className="body">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12">
                    <hr />
                    <h6>Change Password</h6>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Current Password"
                        name="currentPaswrd"
                        value={_getState("currentPaswrd")}
                        onChange={(e) =>
                          _setState(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        name="newPaswrd"
                        value={_getState("newPaswrd")}
                        onChange={(e) =>
                          _setState(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm New Password"
                        name="confirmPaswrd"
                        value={_getState("confirmPaswrd")}
                        onChange={(e) =>
                          _setState(e.target.name, e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <button
                  disabled={isApiCall}
                  type="button"
                  onClick={() => _updatePassword()}
                  className="btn btn-round btn-primary mr-1"
                >
                  Update
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, actions)(AdminProfile);
