import React from 'react';
import { Helmet } from 'react-helmet';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './style.scss';

import logo from '../../assets/login/logo_surveyuk.svg';
import SurveyCard from '../../components/SurveyCard';

const title = "Silicon Center Business Disctrict";
const deadline = "12 Juli 2019";
const tags = ["Computer Science", "Reading", "Nganjuk", "Surabaya", "UI"];
const totalSurvey = 3;

export default class HomePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="home-page">
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
              tags={tags}
              key={`${index}a`}
            />
          ))}
        </div>
        <div className="addSurvey">
          <Fab color="primary" aria-label="Add" className="addSurveyIcon">
            <AddIcon className="addIcon"/>
          </Fab>          
        </div>
      </div>
    );
  }
}
