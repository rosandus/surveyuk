/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import './style.scss';

import logo from '../../assets/login/logo_surveyuk.svg';

export default class LoginPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="loginPage">
        <Helmet>
          <title>Surveyuk</title>
          <meta
            name="description"
            content="Surveyuk Logo"
          />
        </Helmet>
        <div className="logo">
          <img
            src={logo}
            width="300px"
            className="logoSurveyuk"
          />  
          <div className="titleLogin">
            Surveyuk
          </div>
          <div className="subTitleLogin">
          Connecting surveyor and respondent instantly limitless!
          </div>
        </div>
        <div className="loginTerms">
          <Button variant="contained" color="primary">
            Sign In with Google
          </Button>
          <p className="tnc">
            By continuing you indicate that you have read and agree to the Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    );
  }
}
