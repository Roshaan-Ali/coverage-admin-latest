import React from "react";

const InvoiceModal = ({ isModal, setIsModal, data }) => {
  return (
    <>
      <div
        className={`modal fade bd-example-modal-sm ${
          isModal === "show_invoice" ? "d-block show background-clr-modal" : ""
        }`}
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Invoice
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
            <div className="modal-body text-center">
              <p className="font-weight-bold">
                Username:<span className="font-weight-normal"> {data.user_name}</span>
              </p>
              <p className="font-weight-bold">
                Invoice Id:<span className="font-weight-normal"> #{data.payment_id}</span>
              </p>
              <p className="font-weight-bold">
                Amount:<span className="font-weight-normal"> ${data.payment_amount}</span>
              </p>
              <p className="font-weight-bold">
                Email:<span className="font-weight-normal"> {data.user_email}</span>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-round btn-default"
                data-dismiss="modal"
                onClick={() => setIsModal("")}
              >
                Close
              </button>
              {/* <button type="submit" className="btn btn-round btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceModal;
