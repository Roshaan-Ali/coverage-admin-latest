import React, { useState, useEffect } from "react";

const EditSubscriptionPlanModal = ({
  isModal,
  setIsModal,
  data,
  _onUpdate,
}) => {
  const [subscriptionPlan, setSubscriptionPlan] = useState({
    plan_title: "",
    plan_price: "",
    coverbook_counts: "",
    description: "",
    product_id: "",
    points: [],
  });

  const [isEditFeatures, setIsEditFeatures] = useState(false);

  const _setState = (e) => {
    setSubscriptionPlan({
      ...subscriptionPlan,
      [e.target.name]: e.target.value,
    });
  };

  const makeListArray = (data) => {
    let array = data.split("\n");
    console.log(array,"=========================")
    let updatedList = array.filter((item) => {
      return item !== "";
    });
    setSubscriptionPlan({ ...subscriptionPlan, points: updatedList });
  };

  useEffect(() => {
    if (isModal) {
      setSubscriptionPlan({
        plan_title: data.plan_title,
        plan_price: data.plan_price,
        coverbook_counts: data.plan_cover_count,
        product_id: data.product_id,
        description: data.plan_description,
        plan_id: data.plan_id,
        points: JSON.parse(data.plan_points),
      });
    }
  }, [isModal]);

  const _updateSubscriptionPackage = () => {
    _onUpdate({
      plan_title: subscriptionPlan.plan_title,
      plan_price: subscriptionPlan.plan_price,
      product_id: subscriptionPlan.product_id,
      plan_id: subscriptionPlan.plan_id,
      plan_cover_count: subscriptionPlan.coverbook_counts,
      plan_points: subscriptionPlan.points,
      plan_description: subscriptionPlan.description,
    });
  };

  return (
    <div
      className={`modal fade bd-example-modal-lg ${
        isModal === "update_subcription_plan"
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
              Update Subscription Plan
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                _updateSubscriptionPackage();
              }}
            >
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Subscription Plan Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Plan Tilte"
                      name="plan_title"
                      value={subscriptionPlan.plan_title}
                      onChange={(e) => _setState(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Subscription Plan Price:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Plan Price"
                      name="plan_price"
                      disabled
                      value={subscriptionPlan.plan_price}
                      onChange={(e) => {
                        if (/^[0-9\b]+$/.test(e.target.value)) {
                          _setState(e);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Coverbook Counts:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coverbook Counts"
                      value={subscriptionPlan.coverbook_counts}
                      name="coverbook_counts"
                      onChange={(e) => {
                        if (/^[0-9\b]+$/.test(e.target.value)) {
                          _setState(e);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Features:</label>
                    {!isEditFeatures && (
                      <>
                        <ul>
                          {subscriptionPlan.points.map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                        <button
                          className="btn btn-sm btn-light"
                          onClick={() => setIsEditFeatures(true)}
                        >
                          Edit Features
                        </button>
                      </>
                    )}
                    {isEditFeatures && (
                      <textarea
                        rows="5"
                        className="form-control"
                        name="points"
                        onChange={(e) => {
                          makeListArray(e.target.value);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      name="description"
                      value={subscriptionPlan.description}
                      onChange={(e) => {
                        setSubscriptionPlan({
                          ...subscriptionPlan,
                          description: e.target.value.replace(/\n/g, ""),
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button
                    className="btn btn-sm float-right btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSubscriptionPlanModal;
