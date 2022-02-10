import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CustomAction";
import EditSubscriptionPlanModal from "../Components/CustomComponents/EditSubscriptionPlanModal";

const AllPackages = ({
  SubscriptionReducer,
  get_all_subscriptions,
  update_subscription,
}) => {
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [isModal, setIsModal] = useState("");
  const [selectedSubsPlan, setSelectedSubsPlan] = useState({});

  useEffect(() => {
    get_all_subscriptions();
  }, []);

  useEffect(() => {
    setSubscriptionPlans(SubscriptionReducer);
  }, [SubscriptionReducer]);

  const _updateSubscriptionPackage = (data) => {
    update_subscription(data).then(() => setIsModal(""));
    // console.log(data);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="block-header" />
        <div className="row clearfix">
          {subscriptionPlans.map((item, i) => {
            if (item.plan_id === 1) {
              return;
            }
            return (
              <div className="col-lg-3 col-md-6" key={i}>
                <span className="card">
                  <div className="body text-center">
                    <h6 className="mt-3">{item.plan_title.toUpperCase()}</h6>
                    <p className="d-flex align-items-center justify-content-center">
                      {" "}
                      <i className="fa fa-tag font-22 mr-2" />
                      {item.plan_price}
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <div className="row clearfix">
                      <div className="col-12">
                        <button
                          onClick={() => {
                            setSelectedSubsPlan(item);
                            setIsModal("update_subcription_plan");
                          }}
                          className="btn btn-success btn-lg d-flex align-items-center justify-content-center btn-block"
                        >
                          <i className="fa fa-edit font-22" />
                          <span> Edit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <EditSubscriptionPlanModal
        isModal={isModal}
        setIsModal={setIsModal}
        data={selectedSubsPlan}
        _onUpdate={_updateSubscriptionPackage}
      />
    </>
  );
};

const mapStateToProps = ({ SubscriptionReducer }) => {
  return { SubscriptionReducer };
};

export default connect(mapStateToProps, actions)(AllPackages);
