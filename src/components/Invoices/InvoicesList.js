import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import InvoiceModal from "../Components/CustomComponents/InvoiceModal";
import * as actions from "../../actions/CustomAction";
import moment from "moment";
import ReactPaginate from "react-paginate";
// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div style={{ marginTop: "50px", backgroundColor: "red" }}>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

// export default function PaginatedItems({ itemsPerPage }) {
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(items.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="block-header" />
//         <div className="row clearfix mt-5">
//           <div className="col-12">
//             <h1>asdasds</h1>
//             <Items currentItems={currentItems} />
//             <ReactPaginate
//               breakLabel="..."
//               nextLabel="next >"
//               onPageChange={handlePageClick}
//               pageRangeDisplayed={5}
//               pageCount={pageCount}
//               previousLabel="< previous"
//               renderOnZeroPageCount={null}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

const InvoicesList = ({ InvoicesReducer, get_all_invoices }) => {
  const [isModal, setIsModal] = useState("");
  const [invoicesList, setInvoicesList] = useState([
    {
      user_name: "uname1",
      invoice_id: "545445",
      amount: "23",
    },
    {
      user_name: "uname2",
      invoice_id: "1212",
      amount: "23",
    },
    {
      user_name: "uname3",
      invoice_id: "3232",
      amount: "23",
    },
    {
      user_name: "uname4",
      invoice_id: "5455",
      amount: "23",
    },
  ]);
  const [selectedInvoice, setSelectedInvoice] = useState("");

  // PAGINATIon
  let itemsPerPage = 10;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    get_all_invoices();
  }, []);

  useEffect(() => {
    setInvoicesList(InvoicesReducer);
  }, [InvoicesReducer]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(invoicesList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(invoicesList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, invoicesList]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % invoicesList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
                    {/* <th className="text-center">Invoices No.</th> */}
                    <th className="text-center">Amount</th>
                    <th className="text-center">Created At</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems?.map((item, i) => {
                    return (
                      <tr key={i}>
                        <th className="w60">{i + 1}</th>
                        <td>{item?.user_name}</td>
                        {/* <td className="text-center">{item.invoice_id}</td> */}
                        <td className="text-center">${item?.payment_amount}</td>
                        <td className="text-center">
                          {moment(item?.payment_created_at).format(
                            "DD MMM, YYYY"
                          )}
                        </td>
                        <td className="text-center">
                          <button
                            onClick={() => {
                              setSelectedInvoice(item);
                              setIsModal("show_invoice");
                            }}
                            className="btn btn-small btn-success"
                          >
                            View
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
            <div style={{display:'flex',justifyContent:"center" }}>
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
      {isModal === "show_invoice" && (
        <InvoiceModal
          isModal={isModal}
          setIsModal={setIsModal}
          data={selectedInvoice}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ InvoicesReducer }) => {
  return { InvoicesReducer };
};

export default connect(mapStateToProps, actions)(InvoicesList);
