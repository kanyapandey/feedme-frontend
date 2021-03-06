import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/';
import CodeValidate from './views/CodeValidate/';
// import UserProfile from './views/UserProfile/';
import UpdateUser from './views/UpdateUser/';
import FeedHome from './views/FeedHome/';
import FinalFeedHome from './views/FinalFeedHome/';
import FinalFeedForm from './views/FinalFeedForm/';
import FinalTracking from './views/FinalTracking/';
import FinalUpdateUser from './views/FinalUpdateUser/';
import FeedForm from './views/FeedForm/';
// import Message from './views/Message/';
// import Reward from './views/Reward/';
import Tracking from './views/Tracking/';
import EditUser from './views/EditUser/';
import Login from './views/Login/';

import Dashboard from './views/Dashboard/';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render((
  <div>
  <ToastContainer 
  position="top-left"
  autoClose={3000}
  hideProgressBar={true}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnVisibilityChange
  draggable
  pauseOnHover/>
  <HashRouter >
    <Switch>
      <Route exact path="/codevalidate" name="CodeValidate" component={CodeValidate}/>
      {/* <Route exact path="/userprofile" name="UserProfile" component={UserProfile}/> */}
      <Route exact path="/updateuser" name="UpdateUser" component={UpdateUser}/>
      <Route exact path="/feedhome" name="FeedHome" component={FeedHome}/>
      <Route exact path="/finalfeedhome" name="FinalFeedHome" component={FinalFeedHome}/>
      <Route exact path="/finalfeedform" name="FinalFeedForm" component={FinalFeedForm}/>
      <Route exact path="/finaltracking" name="FinalTracking" component={FinalTracking}/>
      <Route exact path="/edituser" name="EditUser" component={EditUser}/>
      <Route exact path="/finalupdateuser" name="FinalUpdateUser" component={FinalUpdateUser}/>
      <Route exact path="/feedform" name="FeedForm" component={FeedForm}/>
      <Route exact path="/login" name="Login" component={Login}/>

      {/* <Route exact path="/message" name="Message" component={Message}/> 
      <Route exact path="/reward" name="Reward" component={Reward}/>  */}

      <Route exact path="/dashboard" name="dashboard" component={Dashboard}/>
      <Route exact path="/message" name="Message" component={FeedHome}/> 
      <Route exact path="/reward" name="Reward" component={FeedHome}/> 

      <Route exact path="/tracking" name="Tracking" component={Tracking}/>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>
  </div>
), document.getElementById('root'));
