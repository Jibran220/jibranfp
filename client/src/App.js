import React from 'react';
// import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import IndexRouters from "./router/index"


//scss
import "./assets/scss/hope-ui.scss"
import "./assets/scss/dark.scss"
import "./assets/scss/rtl.scss"
import "./assets/scss/custom.scss"
import "./assets/scss/customizer.scss"
import Home1 from './components/Home/Home1';
import HomeComplaince from './components/Home/HomeComplaince';
import Homecomplaince1 from './components/Home/Homecomplaince1';
import Homerfqmanager from './components/Home/Homerfqmanager';
import Homerfqmanager1 from './components/Home/Homerfqmanager1';
import Auth from './components/Auth/Auth';
import UpdatePost from './components/Posts/Post/UpdatePost';
import Singlepost from './components/Posts/Post/Singlepost';
import Form from './components/Form/Form';
import Complainceform from './components/Form/Complainceform';
import RFQ_Manager from './components/Form/RFQ_Manager';
import Home from './components/Home/Home'
import Complaince from './components/Complains/Complaince'
import RFQ_Managers from './components/RFQ_Managers/RFQ_Managers'

import Dash from './components/Dashboard.js';
import Table from './Table';
import Dashboard from './Dashboard/Dashboard';
import Login from './components/Login';

// import IndexRouters from "./router/index"

//scss
import "./assets/scss/hope-ui.scss"
import "./assets/scss/dark.scss"
import "./assets/scss/rtl.scss"
import "./assets/scss/custom.scss"
import "./assets/scss/customizer.scss"
import Sidebar from './Sidebar';
import SecondRender from './SecondRender';
import Post from './components/Posts/Post/Post';
import HomeUpdatePro from './components/Home/HomeUpdatePro';
import HomeforHome from './components/Home/HomeforHome';
import HomeViewPro from './components/Home/HomeViewPro';


const App = () => (
    // <div className="App">
    //     <meta charSet="utf-8" />
    //     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    //     <meta
    //         name="viewport"
    //         content="width=device-width, initial-scale=1, shrink-to-fit=no"
    //     />
    //     <meta name="description" content="" />
    //     <meta name="author" content="" />
    //     <title>SB Admin 2 - Blank</title>
    //     {/* Custom fonts for this template*/}
    //     <link
    //         href="vendor/fontawesome-free/css/all.min.css"
    //         rel="stylesheet"
    //         type="text/css"
    //     />
    //     <link
    //         href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    //         rel="stylesheet"
    //     />
    //     {/* Custom styles for this template*/}
    //     <link href="css/sb-admin-2.min.css" rel="stylesheet" />
    //     {/* Page Wrapper */}
    //     <BrowserRouter>
    //         <div id="wrapper">
    //             {/* Sidebar */}
    //             <ul
    //                 className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    //                 id="accordionSidebar"
    //             >
    //                 {/* Sidebar - Brand */}
    //                 <a
    //                     className="sidebar-brand d-flex align-items-center justify-content-center"
    //                     href="index.html"
    //                 >
    //                     <div className="sidebar-brand-icon rotate-n-15">
    //                         <i className="fas fa-laugh-wink" />
    //                     </div>
    //                     <div className="sidebar-brand-text mx-3">
    //                         SB Admin <sup>2</sup>
    //                     </div>
    //                 </a>
    //                 {/* Divider */}
    //                 <hr className="sidebar-divider my-0" />
    //                 {/* Nav Item - Dashboard */}
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/dashboard">
    //                         <i className="fas fa-fw fa-tachometer-alt" />
    //                         <span>Dashboard</span>
    //                     </Link>
    //                     {/* <Link to='/dashboard'>hello</Link> */}
    //                 </li>
    //                 {/* Divider */}
    //                 <hr className="sidebar-divider" />
    //                 {/* Heading */}
    //                 <div className="sidebar-heading">Interface</div>
    //                 {/* Nav Item - Pages Collapse Menu */}
    //                 <li className="nav-item">
    //                     <a
    //                         className="nav-link collapsed"
    //                         href="#"
    //                         data-toggle="collapse"
    //                         data-target="#collapseTwo"
    //                         aria-expanded="true"
    //                         aria-controls="collapseTwo"
    //                     >
    //                         <i className="fas fa-fw fa-cog" />
    //                         <span>Product</span>
    //                     </a>
    //                     <div
    //                         id="collapseTwo"
    //                         className="collapse"
    //                         aria-labelledby="headingTwo"
    //                         data-parent="#accordionSidebar"
    //                     >
    //                         <div className="bg-white py-2 collapse-inner rounded">
    //                             <h6 className="collapse-header"></h6>
    //                             <Link className="collapse-item" to='/home1'>
    //                                 All Products
    //                             </Link>
    //                             <Link className="collapse-item" to='/home'>
    //                                 Add
    //                             </Link>


    //                         </div>

    //                     </div>
    //                 </li>






    //                 {/* <a
    //                             className="nav-link collapsed"
    //                             href="#"
    //                             data-toggle="collapse"
    //                             data-target="#collapseTwo"
    //                             aria-expanded="true"
    //                             aria-controls="collapseTwo"
    //                         >
    //                             <i className="fas fa-fw fa-cog" />
    //                             <span>Compliance Central
    //                             </span>
    //                         </a>
    //                         <div
    //                             id="collapseTwo"
    //                             className="collapse"
    //                             aria-labelledby="headingTwo"
    //                             data-parent="#accordionSidebar"
    //                         >
    //                             <div className="bg-white py-2 collapse-inner rounded">
    //                                 <h6 className="collapse-header"></h6>
    //                                 <Link className="collapse-item" to='/home3'>
    //                                     All Complaince
    //                                 </Link>
    //                                 <Link className="collapse-item" to='/home4'>
    //                                     Add
    //                                 </Link>

    //                             </div> */}
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/homecomplaince">
    //                         <i className="fas fa-fw fa-tachometer-alt" />
    //                         <span>Complaince
    //                         </span>
    //                     </Link>
    //                     {/* <Link to='/dashboard'>hello</Link> */}
    //                 </li>

    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/complainceform">
    //                         <i className="fas fa-fw fa-tachometer-alt" />
    //                         <span> Add Complaince
    //                         </span>
    //                     </Link>
    //                     {/* <Link to='/dashboard'>hello</Link> */}
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/">
    //                         <i className="fas fa-fw fa-tachometer-alt" />
    //                         <span> Analytics
    //                         </span>
    //                     </Link>
    //                     {/* <Link to='/dashboard'>hello</Link> */}
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/homerfqmanager">
    //                         <i className="fas fa-fw fa-tachometer-alt" />
    //                         <span> RFQ Manager
    //                         </span>
    //                     </Link>
    //                     {/* <Link to='/dashboard'>hello</Link> */}
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/homerfqmanager1">
    //                         <i className="fas fa-fw fa-tachometer-alt" />
    //                         <span> Add RFQ Manager
    //                         </span>
    //                     </Link>
    //                     {/* <Link to='/dashboard'>hello</Link> */}
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/">
    //                         <i className="fas fa-fw fa-tachometer-alt" />
    //                         <span>Task
    //                         </span>
    //                     </Link>
    //                     {/* <Link to='/dashboard'>hello</Link> */}
    //                 </li>
    //                 {/* <a
    //                             className="nav-link collapsed"
    //                             href="#"
    //                             data-toggle="collapse"
    //                             data-target="#collapseTwo"
    //                             aria-expanded="true"
    //                             aria-controls="collapseTwo"
    //                         >
    //                             <i className="fas fa-fw fa-cog" />
    //                             <span>RFQ Manager</span>
    //                         </a>
    //                         <div
    //                             id="collapseTwo"
    //                             className="collapse"
    //                             aria-labelledby="headingTwo"
    //                             data-parent="#accordionSidebar"
    //                         >
    //                             <div className="bg-white py-2 collapse-inner rounded">
    //                                 <h6 className="collapse-header"></h6>
    //                                 <Link className="collapse-item" to='/homerfqmanager'>
    //                                     All
    //                                 </Link>
    //                                 <Link className="collapse-item" to='/homerfqmanager1'>
    //                                     Add
    //                                 </Link>

    //                             </div>
    //                         </div> */}
    //                 {/* <li className="nav-item">
    //                          <Link className="nav-link" to="/dashboard">
    //                                 <i className="fas fa-fw fa-tachometer-alt" />
    //                                 <span>Task
    //                                 </span>
    //                             </Link>
    //                             {/* <Link to='/dashboard'>hello</Link> */}
    //                 {/* </li> */}
    //                 {/* </div> */}



    //                 {/* Divider */}

    //             </ul>
    //             {/* End of Sidebar */}
    //             {/* Content Wrapper */}
    //             <div id="content-wrapper" className="d-flex flex-column">
    //                 {/* Main Content */}
    //                 <div id="content">
    //                     {/* Topbar */}
    //                     <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    //                         {/* Sidebar Toggle (Topbar) */}
    //                         <button
    //                             id="sidebarToggleTop"
    //                             className="btn btn-link d-md-none rounded-circle mr-3"
    //                         >
    //                             <i className="fa fa-bars" />
    //                         </button>
    //                         {/* Topbar Search */}
    //                         <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    //                             <div className="input-group">
    //                                 <input
    //                                     type="text"
    //                                     className="form-control bg-light border-0 small"
    //                                     placeholder="Search for..."
    //                                     aria-label="Search"
    //                                     aria-describedby="basic-addon2"
    //                                 />
    //                                 <div className="input-group-append">
    //                                     <button className="btn btn-primary" type="button">
    //                                         <i className="fas fa-search fa-sm" />
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </form>
    //                         {/* Topbar Navbar */}
    //                         <ul className="navbar-nav ml-auto">
    //                             {/* Nav Item - Search Dropdown (Visible Only XS) */}
    //                             <li className="nav-item dropdown no-arrow d-sm-none">
    //                                 <a
    //                                     className="nav-link dropdown-toggle"
    //                                     href="#"
    //                                     id="searchDropdown"
    //                                     role="button"
    //                                     data-toggle="dropdown"
    //                                     aria-haspopup="true"
    //                                     aria-expanded="false"
    //                                 >
    //                                     <i className="fas fa-search fa-fw" />
    //                                 </a>
    //                                 {/* Dropdown - Messages */}
    //                                 <div
    //                                     className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
    //                                     aria-labelledby="searchDropdown"
    //                                 >
    //                                     <form className="form-inline mr-auto w-100 navbar-search">
    //                                         <div className="input-group">
    //                                             <input
    //                                                 type="text"
    //                                                 className="form-control bg-light border-0 small"
    //                                                 placeholder="Search for..."
    //                                                 aria-label="Search"
    //                                                 aria-describedby="basic-addon2"
    //                                             />
    //                                             <div className="input-group-append">
    //                                                 <button className="btn btn-primary" type="button">
    //                                                     <i className="fas fa-search fa-sm" />
    //                                                 </button>
    //                                             </div>
    //                                         </div>
    //                                     </form>
    //                                 </div>
    //                             </li>
    //                             {/* Nav Item - Alerts */}
    //                             <li className="nav-item dropdown no-arrow mx-1">
    //                                 <a
    //                                     className="nav-link dropdown-toggle"
    //                                     href="#"
    //                                     id="alertsDropdown"
    //                                     role="button"
    //                                     data-toggle="dropdown"
    //                                     aria-haspopup="true"
    //                                     aria-expanded="false"
    //                                 >
    //                                     <i className="fas fa-bell fa-fw" />
    //                                     {/* Counter - Alerts */}
    //                                     <span className="badge badge-danger badge-counter">3+</span>
    //                                 </a>
    //                                 {/* Dropdown - Alerts */}
    //                                 <div
    //                                     className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
    //                                     aria-labelledby="alertsDropdown"
    //                                 >
    //                                     <h6 className="dropdown-header">Alerts Center</h6>
    //                                     <a className="dropdown-item d-flex align-items-center" href="#">
    //                                         <div className="mr-3">
    //                                             <div className="icon-circle bg-primary">
    //                                                 <i className="fas fa-file-alt text-white" />
    //                                             </div>
    //                                         </div>
    //                                         <div>
    //                                             <div className="small text-gray-500">December 12, 2019</div>
    //                                             <span className="font-weight-bold">
    //                                                 A new monthly report is ready to download!
    //                                             </span>
    //                                         </div>
    //                                     </a>
    //                                     <a className="dropdown-item d-flex align-items-center" href="#">
    //                                         <div className="mr-3">
    //                                             <div className="icon-circle bg-success">
    //                                                 <i className="fas fa-donate text-white" />
    //                                             </div>
    //                                         </div>
    //                                         <div>
    //                                             <div className="small text-gray-500">December 7, 2019</div>
    //                                             $290.29 has been deposited into your account!
    //                                         </div>
    //                                     </a>
    //                                     <a className="dropdown-item d-flex align-items-center" href="#">
    //                                         <div className="mr-3">
    //                                             <div className="icon-circle bg-warning">
    //                                                 <i className="fas fa-exclamation-triangle text-white" />
    //                                             </div>
    //                                         </div>
    //                                         <div>
    //                                             <div className="small text-gray-500">December 2, 2019</div>
    //                                             Spending Alert: We've noticed unusually high spending for
    //                                             your account.
    //                                         </div>
    //                                     </a>

    //                                     <a
    //                                         className="dropdown-item text-center small text-gray-500"
    //                                         href="#"
    //                                     >
    //                                         Show All Alerts
    //                                     </a>
    //                                 </div>
    //                             </li>
    //                             {/* Nav Item - Messages */}
    //                             <li className="nav-item dropdown no-arrow mx-1">
    //                                 <a
    //                                     className="nav-link dropdown-toggle"
    //                                     href="#"
    //                                     id="messagesDropdown"
    //                                     role="button"
    //                                     data-toggle="dropdown"
    //                                     aria-haspopup="true"
    //                                     aria-expanded="false"
    //                                 >
    //                                     <i className="fas fa-envelope fa-fw" />
    //                                     {/* Counter - Messages */}
    //                                     <span className="badge badge-danger badge-counter">7</span>
    //                                 </a>
    //                                 {/* Dropdown - Messages */}
    //                                 <div
    //                                     className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
    //                                     aria-labelledby="messagesDropdown"
    //                                 >
    //                                     <h6 className="dropdown-header">Message Center</h6>
    //                                     <a className="dropdown-item d-flex align-items-center" href="#">
    //                                         <div className="dropdown-list-image mr-3">
    //                                             <img
    //                                                 className="rounded-circle"
    //                                                 src="img/undraw_profile_1.svg"
    //                                                 alt="..."
    //                                             />
    //                                             <div className="status-indicator bg-success" />
    //                                         </div>
    //                                         <div className="font-weight-bold">
    //                                             <div className="text-truncate">
    //                                                 Hi there! I am wondering if you can help me with a problem
    //                                                 I've been having.
    //                                             </div>
    //                                             <div className="small text-gray-500">
    //                                             </div>
    //                                         </div>
    //                                     </a>
    //                                     <a className="dropdown-item d-flex align-items-center" href="#">
    //                                         <div className="dropdown-list-image mr-3">
    //                                             <img
    //                                                 className="rounded-circle"
    //                                                 src="img/undraw_profile_2.svg"
    //                                                 alt="..."
    //                                             />
    //                                             <div className="status-indicator" />
    //                                         </div>
    //                                         <div>
    //                                             <div className="text-truncate">
    //                                                 I have the photos that you ordered last month, how would
    //                                                 you like them sent to you?
    //                                             </div>
    //                                             <div className="small text-gray-500">Jae Chun · 1d</div>
    //                                         </div>
    //                                     </a>
    //                                     <a className="dropdown-item d-flex align-items-center" href="#">
    //                                         <div className="dropdown-list-image mr-3">
    //                                             <img
    //                                                 className="rounded-circle"
    //                                                 src="img/undraw_profile_3.svg"
    //                                                 alt="..."
    //                                             />
    //                                             <div className="status-indicator bg-warning" />
    //                                         </div>
    //                                         <div>
    //                                             <div className="text-truncate">
    //                                                 Last month's report looks great, I am very happy with the
    //                                                 progress so far, keep up the good work!
    //                                             </div>
    //                                             <div className="small text-gray-500">
    //                                                 Morgan Alvarez · 2d
    //                                             </div>
    //                                         </div>
    //                                     </a>
    //                                     <a className="dropdown-item d-flex align-items-center" href="#">
    //                                         <div className="dropdown-list-image mr-3">
    //                                             <img
    //                                                 className="rounded-circle"
    //                                                 src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
    //                                                 alt="..."
    //                                             />
    //                                             <div className="status-indicator bg-success" />
    //                                         </div>
    //                                         <div>
    //                                             <div className="text-truncate">
    //                                                 Am I a good boy? The reason I ask is because someone told
    //                                                 me that people say this to all dogs, even if they aren't
    //                                                 good...
    //                                             </div>
    //                                             <div className="small text-gray-500">
    //                                                 Chicken the Dog · 2w
    //                                             </div>
    //                                         </div>
    //                                     </a>
    //                                     <a
    //                                         className="dropdown-item text-center small text-gray-500"
    //                                         href="#"
    //                                     >
    //                                         Read More Messages
    //                                     </a>
    //                                 </div>
    //                             </li>
    //                             <div className="topbar-divider d-none d-sm-block" />
    //                             {/* Nav Item - User Information */}
    //                             <li className="nav-item dropdown no-arrow">
    //                                 <a
    //                                     className="nav-link dropdown-toggle"
    //                                     href="#"
    //                                     id="userDropdown"
    //                                     role="button"
    //                                     data-toggle="dropdown"
    //                                     aria-haspopup="true"
    //                                     aria-expanded="false"
    //                                 >
    //                                     <span className="mr-2 d-none d-lg-inline text-gray-600 small">
    //                                         Douglas McGee
    //                                     </span>
    //                                     <img
    //                                         className="img-profile rounded-circle"
    //                                         src="img/undraw_profile.svg"
    //                                     />
    //                                 </a>
    //                                 {/* Dropdown - User Information */}
    //                                 <div
    //                                     className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
    //                                     aria-labelledby="userDropdown"
    //                                 >
    //                                     <a className="dropdown-item" href="#">
    //                                         <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
    //                                         Profile
    //                                     </a>
    //                                     <a className="dropdown-item" href="#">
    //                                         <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
    //                                         Settings
    //                                     </a>
    //                                     <a className="dropdown-item" href="#">
    //                                         <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
    //                                         Activity Log
    //                                     </a>
    //                                     <div className="dropdown-divider" />
    //                                     <a
    //                                         className="dropdown-item"
    //                                         href="#"
    //                                         data-toggle="modal"
    //                                         data-target="#logoutModal"
    //                                     >
    //                                         <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
    //                                         Logout
    //                                     </a>
    //                                 </div>
    //                             </li>
    //                         </ul>
    //                     </nav>
    //                     {/* End of Topbar */}
    //                     {/* Begin Page Content */}
    //                     <div className="container-fluid">

    //                         <Routes>
    //                             <Route path="/" exact element={<Dashboard />} />
    //                             <Route path="/home1" exact element={<Home1 />} />
    //                             <Route path="/home" exact element={<Home />} />
    //                             <Route path="/homecomplaince" exact element={<Complaince />} />
    //                             <Route path="/complainceform" exact element={<Complainceform />} />
    //                             <Route path="/homerfqmanager" exact element={<RFQ_Managers />} />
    //                             <Route path="/homerfqmanager1" exact element={<RFQ_Manager />} />
    //                             <Route path="/auth" exact element={<Auth />} />
    //                             <Route path="/login" exact element={<Login />} />
    //                             <Route path="/dashboard" exact element={<Dashboard />} />
    //                          <Route path="/dash" exact element={<Dash />} />
    //                             <Route path="/updatepost/:id" exact element={<UpdatePost />} />
    //                             <Route path="/singlepost/:id" exact element={<Singlepost />} /> 
    //                         </Routes>
    //                     </div>
    //                     {/* /.container-fluid */}
    //                 </div>
    //                 {/* End of Main Content */}
    //                 {/* Footer */}
    //                 <footer className="sticky-footer bg-white">
    //                     <div className="container my-auto">
    //                         <div className="copyright text-center my-auto">
    //                             <span>Copyright © Your Website 2020</span>
    //                         </div>
    //                     </div>
    //                 </footer>
    //                 {/* End of Footer */}
    //             </div>
    //             {/* End of Content Wrapper */}
    //         </div>
    //     </BrowserRouter >
    //     {/* End of Page Wrapper */}
    //     {/* Scroll to Top Button*/}
    //     <a className="scroll-to-top rounded" href="#page-top">
    //         <i className="fas fa-angle-up" />
    //     </a>
    //     {/* Logout Modal*/}
    //     <div
    //         className="modal fade"
    //         id="logoutModal"
    //         tabIndex={-1}
    //         role="dialog"
    //         aria-labelledby="exampleModalLabel"
    //         aria-hidden="true"
    //     >
    //         <div className="modal-dialog" role="document">
    //             <div className="modal-content">
    //                 <div className="modal-header">
    //                     <h5 className="modal-title" id="exampleModalLabel">
    //                         Ready to Leave?
    //                     </h5>
    //                     <button
    //                         className="close"
    //                         type="button"
    //                         data-dismiss="modal"
    //                         aria-label="Close"
    //                     >
    //                         <span aria-hidden="true">×</span>
    //                     </button>
    //                 </div>
    //                 <div className="modal-body">
    //                     Select "Logout" below if you are ready to end your current session.
    //                 </div>
    //                 <div className="modal-footer">
    //                     <button
    //                         className="btn btn-secondary"
    //                         type="button"
    //                         data-dismiss="modal"
    //                     >
    //                         Cancel
    //                     </button>
    //                     <a className="btn btn-primary" href="login.html">
    //                         Logout
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     {/* Bootstrap core JavaScript*/}
    //     {/* Core plugin JavaScript*/}
    //     {/* Custom scripts for all pages*/}




    // </div >


    <div className="App">

    <BrowserRouter>
      <Routes>
                                <Route path="/" exact element={<HomeforHome />} />
                                <Route path="/producthf" exact element={<Home />} />
                                <Route path="/productht" exact element={<Home1 />} />
                              <Route path="/updatepost/:id" exact element={<HomeUpdatePro />} />
                              <Route path="/singlepost/:id" exact element={<HomeViewPro />} />  
                                {/* <Route path="/productht" exact element={<Home1 />} /> */}
                                 <Route path="/home1" exact element={<Home1 />} />
                                 <Route path="/home" exact element={<Home />} />
                                 <Route path="/homecomplaince" exact element={<Complaince />} />
                              <Route path="/complainceform" exact element={<Complainceform />} />
                              <Route path="/homerfqmanager" exact element={<RFQ_Managers />} />
                              <Route path="/homerfqmanager1" exact element={<RFQ_Manager />} />
                              <Route path="/auth" exact element={<Auth />} />
                              <Route path="/login" exact element={<Login />} />
                              <Route path="/dashboard" exact element={<Dashboard />} />
                           {/* <Route path="/dash" exact element={<Dash />} /> */}
                          </Routes>
                          </BrowserRouter>
                  