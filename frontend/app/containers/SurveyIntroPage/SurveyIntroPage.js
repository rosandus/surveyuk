import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import BackIcon from '@material-ui/icons/ArrowBack'

import './style.scss';


const titleSurvey = "Pengaruh Kualitas Sistem Informasi terhadap Keberlanjutan Penggunaan Aplikasi: Studi Kasus GOJEK"
const surveyor = "Rosa Nur Rizky FT";
const kriteria = ["Nganjuk", "Software Engineer", "Silicon Valley"]
const jumlahPoin = 100;
const deadline = "12 Juni 2019"

class SurveyIntroPage extends React.Component {
  handleBackBtnClick = () => {
    this.props.history.goBack();
  }

  handleFillSurvey = () => {
    this.props.history.push('/survey/questions')
  }

  render() {
    return (
      <div className="survey-intro-page">
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
          <Card className="card">
            <div className="infoProfile">
              <div className="title">
                Oleh
              </div>
              <div className="description">
                {surveyor}
              </div>                
            </div>
            <Divider />
            <div className="infoProfile deadline">
              <div className="title">
                Batas Waktu
              </div>
              <div className="description">
                {deadline}
              </div>                
            </div>
            <Divider />
            <div className="infoProfile">
              <div className="title">
                Kriteria
              </div>
              <div className="description">
                {kriteria.join(", ")}
              </div>                
            </div>
            <Divider /> 
            <div className="infoProfile">
              <div className="title">
                Jumlah Poin
              </div>
              <div className="description">
                {jumlahPoin}
              </div>                
            </div>
          </Card>
          <div className="tnc">
            <div className="tncDesc">
              Dengan melanjutkan pengisian survei,
              maka pengguna harus mengisi data yang
              benar dan sesuai.              
            </div>
            <Button variant="contained" color="primary" onClick={this.handleFillSurvey}>
              ISI SURVEI
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SurveyIntroPage);