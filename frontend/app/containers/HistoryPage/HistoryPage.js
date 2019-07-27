import React from 'react';
import { Helmet } from 'react-helmet';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

import './style.scss';

import logo from '../../assets/login/logo_surveyuk.svg';
import SurveyCard from '../../components/SurveyCard';

const title = "Support Rosa pergi ke Silicon Valley yuk!";
const deadline = "12 Juli 2019";
const tags = ["Computer Science", "Reading", "Nganjuk", "Surabaya", "UI"];
const actualRespondent = 50;
const targetRespondent = 50;
const respondent = [actualRespondent, targetRespondent];
const totalSurvey = 3;

export default class HistoryPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="history-page">
        <Helmet>
          <title>Surveyuk</title>
          <meta
            name="description"
            content="Surveyuk Logo"
          />
        </Helmet>
        <div className="header">
          <div className="searchBox">
          <Paper className="root">
            <IconButton className="iconButton" aria-label="Search">
              <SearchIcon />
            </IconButton>    
            <InputBase
              className="input"
              placeholder="Cari survei"
              inputProps={{ 'aria-label': 'Cari survei' }}
            />
            {/* <Divider className={classes.divider} /> */}
            <IconButton className="iconButton" aria-label="Menu">
              <FilterListIcon />
            </IconButton>
          </Paper>
        </div>
        </div>
        <div className="surveyList">
          {[...Array(totalSurvey)].map((item, index) => (
            <SurveyCard
              title={title}
              deadline={deadline}
              respondent={respondent}
              tags={tags}
              key={`${index}a`}
            />
          ))}
        </div>
      </div>
    );
  }
}
