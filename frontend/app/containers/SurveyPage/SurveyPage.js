import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import QuestionCard from '../../components/QuestionCard';

import BackIcon from '@material-ui/icons/ArrowBack'

import './style.scss';

const titleSurvey = "Pengaruh Kualitas Sistem Informasi terhadap Keberlanjutan Penggunaan Aplikasi: Studi Kasus GOJEK"
const title = "Rosa Nur Rizky FT";
const tags = ["Nganjuk", "Software Engineer", "Silicon Valley"]
const jumlahPoin = 100;
const deadline = "12 Juni 2019"

class SurveyPage extends React.Component {
  state = {
    step: 1,
    minStep: this.props.min,
    maxStep: this.props.max
  }

  handleBackBtnClick = () => {
    this.props.history.goBack();
  }

  nextStep = () => {
    const { step, maxStep } = this.state
    this.setState({
        // step : step + 1
        step: (step < (maxStep) ? step + 1 : 1)
    });
  }

  prevStep = () => {
    const { step, minStep } = this.state
    this.setState({
        // step : step - 1
        step: (step > (minStep) ? step - 1 : 1)        
    });

  }

  render() {
    const { step } = this.state;
    const { min, max } = this.props;

    const renderSwitch = () => {
      switch(step) {
        case 1:
          return (
            <div className="questionContent">
              <QuestionCard
                title={"Hoo"}
                deadline={deadline}
                tags={tags}
              />
            </div>
          )
        case 2:
            return (
              <div className="questionContent">
                <QuestionCard
                  title={"Mantap"}
                  deadline={deadline}
                  tags={tags}
                />
              </div>
            )
        case 3:
            return (
              <div className="questionContent">
                <QuestionCard
                  title={"Asik"}
                  deadline={deadline}
                  tags={tags}
                />
              </div>
            )
        default:
            return (
              <div className="questionContent">
                <QuestionCard
                  title={"HEHE"}
                  deadline={deadline}
                  tags={tags}
                />
              </div>
          )
      }
    }    

    return (
      <div className="survey-page">
        <Helmet>
          <title>Isi Survey</title>
        </Helmet>
        <div className="header">
          <div className="navTop">
              <div className="back">
                <BackIcon onClick={this.handleBackBtnClick}/>
              </div>
              <div className="titlePage">
                Isi Survei
              </div>
            </div>
          <div className="briefSurvey">
            {titleSurvey}
          </div>
          <div className="wrapperQuestion">
            {renderSwitch()}
          </div>            
          <div className="navBottom">
            <Button 
              variant="contained"
              className="nav"
              onClick={this.prevStep}
            >
              	&#8592; Kembali
            </Button>
            <div className="pagination nav">{step}/{max}</div>
              <Button 
                variant="contained"
                className="nav"
                onClick={this.nextStep}
              >
              Lanjut &#8594;
            </Button>              
          </div>
        </div>
      </div>
    );
  }
}

SurveyPage.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number  
};

SurveyPage.defaultProps = {
  min: 1,
  max: 3
};

export default withRouter(SurveyPage);