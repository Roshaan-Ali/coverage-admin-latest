import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CustomAction";
import moment from 'moment'

const ReportsList = ({
  CoverbooksReducer,
  get_all_coverbooks,
  delete_coverbook,
}) => {
  const [coverbookList, setCoverbookList] = useState([]);
  const [isApiCall, setIsApiCall] = useState(false);

  // let accounts = [
  //   { type_name: "Free", type_id: 1 },
  //   { type_name: "Bronze", type_id: 2 },
  //   { type_name: "Bronze plus", type_id: 3 },
  //   { type_name: "Silver", type_id: 4 },
  //   { type_name: "Gold", type_id: 5 },
  // ];

  useEffect(() => {
    get_all_coverbooks();
  }, []);

  useEffect(() => {
    setCoverbookList(CoverbooksReducer);
  }, [CoverbooksReducer]);

  const _viewCoverbook = () => {
    console.log("view");
  };
  const _deleteCoverbook = (cover_id) => {
    setIsApiCall(true);
    delete_coverbook(cover_id).then(() => {
      setIsApiCall(false);
    });
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
                    <th>Coverbook Title</th>
                    <th className="text-center">User Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Created At</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {coverbookList.map((item, i) => {
                    return (
                      <tr key={i}>
                        <th className="w60">{i + 1}</th>
                        <td>{item?.cover_title}</td>
                        <td className="text-center">{item?.user_name}</td>
                        <td className="text-center">
                          {item?.user_email}
                          {/* <span
                            className={`badge ${
                              item.role_id === 1
                                ? "badge-primary"
                                : item.role_id === 2
                                ? "badge-secondary"
                                : item.role_id === 3
                                ? "badge-dark"
                                : item.role_id === 4
                                ? "badge-light"
                                : "badge-warning"
                            }`}
                          >
                            {accounts.map((type) => {
                              return (
                                type.type_id === item.role_id && type.type_name
                              );
                            })}
                          </span> */}
                        </td>
                        <td className="text-center">{moment(item?.cover_created_at).format("DD MMM, YYYY")}</td>
                        <td className="text-center">
                          <button
                            disabled={isApiCall}
                            onClick={() => {
                              _viewCoverbook();
                            }}
                            className="btn btn-small btn-success"
                          >
                            View
                          </button>
                          <button
                            disabled={isApiCall}
                            onClick={() => {
                              _deleteCoverbook(item.cover_id);
                            }}
                            className="btn btn-small btn-danger ml-3"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ CoverbooksReducer }) => {
  return { CoverbooksReducer };
};

export default connect(mapStateToProps, actions)(ReportsList);
