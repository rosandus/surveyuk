/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import LoginPage from 'containers/LoginPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotificationPage from 'containers/NotificationPage/Loadable';
import HistoryPage from '../HistoryPage';
import ProfilePage from 'containers/ProfilePage/Loadable';

import SurveyIntroPage from 'containers/SurveyIntroPage/Loadable';
import SurveyPage from 'containers/SurveyPage/Loadable';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import BottomNavbar from 'components/BottomNavbar';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="Surveyuk"
      defaultTitle="Surveyuk"
    >
      <meta name="description" content="Surveyuk" />
    </Helmet> 
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />

      <Route exact path="/home" component={HomePage} />      
      <Route path="/notification" component={NotificationPage} />     
      <Route path="/history" component={HistoryPage} />           
      <Route path="/profile" component={ProfilePage} /> 

      <Route path="/survey/intro" component={SurveyIntroPage} />
      <Route path="/survey/questions" component={SurveyPage} /> 

      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <BottomNavbar />
    {/* <Footer /> */}
  </div>
);

export default App;
