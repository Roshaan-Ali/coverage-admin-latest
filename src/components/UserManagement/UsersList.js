import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import EditUserModal from "../Components/CustomComponents/EditUserModal";
import * as actions from "../../actions/CustomAction";
import EditUserPaswrdModal from "../Components/CustomComponents/EditUserPaswrdModal";
import ReactPaginate from "react-paginate";

const UsersList = ({
  UsersReducer,
  enable_disable_account,
  get_all_users,
  update_user_detail,
  update_user_password,
}) => {
  const [usersList, setUsersList] = useState([]);
  // const [isModal, setIsModal] = useState(false);
  const [isModal, setIsModal] = useState("");
  const [isApiCall, setIsApiCall] = useState(false);
  const [updateUser, setUpdateUser] = useState("");
  const [selectedUser, setSelectedUser] = useState({});

  // PAGINATIon
  let itemsPerPage = 3;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  let accounts = [
    { type_name: "Free", type_id: 1 },
    { type_name: "Bronze", type_id: 2 },
    { type_name: "Bronze plus", type_id: 3 },
    { type_name: "Silver", type_id: 4 },
    { type_name: "Gold", type_id: 5 },
  ];

  useEffect(() => {
    get_all_users();
  }, []);

  useEffect(() => {
    console.log(UsersReducer)
    if (UsersReducer.length > 0) {
      setUsersList(UsersReducer);
    }
  }, [UsersReducer]);

  useEffect(() => {
    // Fetch items from another resources.
    if (UsersReducer.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(usersList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(usersList.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, usersList]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % usersList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const _updateUserData = (user_id, data) => {
    update_user_detail(user_id, data).then(() => {
      get_all_users();
      setIsModal("");
    });
  };

  const _updatePassword = (user_id, data) => {
    update_user_password(user_id, data);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="block-header" />
        <div className="row clearfix">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table header-border table-hover table-custom spacing5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Account Type</th>
                    <th className="text-center">Account Status</th>
                    <th className="text-center">Enable/Disable Account</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, i) => {
                    return (
                      <tr key={i}>
                        <th className="w60">{i + 1}</th>
                        <td>{item.user_name}</td>
                        <td>{item.user_email}</td>
                        <td>
                          <span
                            className={`badge ${
                              item.plan_id === 1
                                ? "badge-primary"
                                : item.plan_id === 2
                                ? "badge-secondary"
                                : item.plan_id === 3
                                ? "badge-dark"
                                : item.plan_id === 4
                                ? "badge-light"
                                : "badge-warning"
                            }`}
                          >
                            {accounts.map((type) => {
                              return (
                                type.type_id === item.plan_id && type.type_name
                              );
                            })}
                          </span>
                        </td>
                        <td className="text-center">
                          <h4>
                            <span
                              className={`badge ${
                                item.user_status
                                  ? "badge-success"
                                  : "badge-danger"
                              }`}
                            >
                              {item.user_status ? "Active" : "Inactive"}
                            </span>
                          </h4>
                        </td>
                        {isApiCall && updateUser === item.user_id ? (
                          <td className="text-center">
                            <div class="spinner-border text-muted"></div>
                          </td>
                        ) : (
                          <td className="text-center">
                            {/* <button
                              disabled={isApiCall}
                              onClick={() => {
                                setIsModal(true);
                                setSelectedUser(item);
                              }}
                              className="btn btn-small btn-success"
                            >
                              Edit
                            </button> */}
                            <label class="switch">
                              <input
                                disabled={isApiCall}
                                type="checkbox"
                                checked={item.user_status}
                                onChange={(e) => {
                                  setIsApiCall(true);
                                  setUpdateUser(item.user_id);
                                  enable_disable_account(
                                    item.user_id,
                                    item.user_status === 1 ? 0 : 1
                                  )
                                    .then(() => {
                                      get_all_users();
                                    })
                                    .then(() => {
                                      setIsApiCall(false);
                                      setUpdateUser("");
                                    });
                                }}
                              />
                              <span class="slider round"></span>
                            </label>
                            {/* <button
                              disabled={isApiCall}
                              onClick={() => {
                                setIsApiCall(true);
                                setUpdateUser(item.user_id);
                                enable_disable_account(
                                  item.user_id,
                                  item.user_status === 1 ? 0 : 1
                                )
                                  .then(() => {
                                    get_all_users();
                                  })
                                  .then(() => {
                                    setIsApiCall(false);
                                    setUpdateUser("");
                                  });
                              }}
                              className={`btn btn-small ml-2 ${
                                item.user_status ? "btn-danger" : "btn-primary"
                              }`}
                            >
                              {item.user_status
                                ? "Disable Account"
                                : "Enable Account"}
                            </button> */}
                          </td>
                        )}
                        <td className="text-center">
                          <button
                            disabled={isApiCall}
                            onClick={() => {
                              setIsModal("update_user");
                              setSelectedUser(item);
                            }}
                            className="btn btn-small btn-success"
                          >
                            Edit
                          </button>
                          <button
                            disabled={isApiCall}
                            onClick={() => {
                              setIsModal("update_user_password");
                              setSelectedUser(item);
                            }}
                            className="btn btn-small btn-outline-primary ml-2"
                          >
                            Change Password
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                // forcePage={5}
              />
            </div>
          </div>
        </div>
      </div>
      {isModal === "update_user" && (
        <EditUserModal
          isModal={isModal}
          setIsModal={setIsModal}
          data={selectedUser}
          updateUser={_updateUserData}
        />
      )}
      {isModal === "update_user_password" && (
        <EditUserPaswrdModal
          isModal={isModal}
          setIsModal={setIsModal}
          user_id={selectedUser.user_id}
          updatePassword={_updatePassword}
        />
      )}
    </>
  );
};

// export default UsersList;

const mapStateToProps = ({ UsersReducer }) => {
  return { UsersReducer };
};

export default connect(mapStateToProps, actions)(UsersList);
