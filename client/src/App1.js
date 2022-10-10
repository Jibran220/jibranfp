import React from 'react';
// import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import IndexRouters from "./router/index"

import { ExternalLink } from 'react-external-link';

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
import FormWizard from './components/Form/FormWizard';

function App1() {
    return (
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

        </div>
    );
}

export default App1;