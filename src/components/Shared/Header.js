import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  toggleMegamenu,
  toggleSearchBar,
  toggleNotificationBar,
  setOffcanvas,
} from "../../actions/settingsAction";
import { logout } from "../../actions/CustomAction";

const Header = ({
  toggleMegamenu,
  isMegaMenu,
  toggleNotificationBar,
  toggleSearchBar,
  setOffcanvas,
  offcanvas,
  logout,
}) => {
  const [scrolled, setScrolled] = useState(0);
  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolleda = `${(scrollPx / winHeightPx) * 100}%`;
    setScrolled(scrolleda);
  };
  window.addEventListener("scroll", scrollProgress);

  const history = useHistory();
  // const progressContainerStyle = {
  //   background: "#f8bbd0",
  //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  //   height: "2px",
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   width: "100vw",
  //   zIndex: 99,
  // };

  const progressBarStyle = {
    // height: "2px",
    // background: "#e91e63",
    width: scrolled,
  };
  return (
    <>
      <nav className="navbar top-navbar" style={{ backgroundColor: "#6A74C9" }}>
        <div className="container-fluid">
          <div className="navbar-left">
            <div className="navbar-btn">
              <Link to="/">
                <img
                  src="../assets/images/icon.png"
                  alt="Coverage Master Logo"
                  className="img-fluid logo"
                />
              </Link>
              <button
                type="button"
                className="btn-toggle-offcanvas"
                onClick={() => setOffcanvas(!offcanvas)}
              >
                <i className="lnr lnr-menu fa fa-bars"></i>
              </button>
            </div>
          </div>
          <img
            src="../assets/images/icon.png"
            alt="Coverage Master Logo"
            className="logo logo-center-dashboard"
          />
          <div className="navbar-right">
            <div id="navbar-menu">
              <ul className="nav navbar-nav">
                {/* <li><span onClick={() => toggleSearchBar(true)} className="search_toggle icon-menu" title="Search Result"><i className="icon-magnifier"></i></span></li>
                                <li><span onClick={() => toggleNotificationBar(true)} className="right_toggle icon-menu" title="Right Menu"><i className="icon-bubbles"></i><span className="notification-dot bg-pink">2</span></span></li> */}
                <li>
                  <Link
                    onClick={() => {
                      logout().then(() => history.push("/login"));
                    }}
                    className="icon-menu"
                  >
                    <i className="icon-power logout-icon"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="progress-container">
          <div
            style={progressBarStyle}
            className="progress-bar"
            id="myBar"
          ></div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  isMegaMenu: state.settings.isMegaMenu,
  offcanvas: state.settings.offcanvas,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMegamenu: (e) => dispatch(toggleMegamenu(e)),
  toggleSearchBar: (e) => dispatch(toggleSearchBar(e)),
  toggleNotificationBar: (e) => dispatch(toggleNotificationBar(e)),
  setOffcanvas: (e) => dispatch(setOffcanvas(e)),
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
