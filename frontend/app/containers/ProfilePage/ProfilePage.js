import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import BackIcon from '@material-ui/icons/ArrowBack'

import './style.scss';

const imgProfile = "https://dummyimage.com/300/000/ffffff.png&text=Dummy+Photo";
const nameProfile = "Rosa Nur Rizky FT";
const kriteria = ["Nganjuk", "Software Engineer", "Silicon Valley"]
const jumlahPoin = 100;
const sebagaiPenyurvei = 10;
const sebagaiResponden = 10;

class ProfilePage extends React.Component {
  handleBackBtnClick = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="profile-page">
        <Helmet>
          <title>Profil</title>
        </Helmet>
        <div className="header">
          <div className="navTop">
              <div className="back">
                <BackIcon onClick={this.handleBackBtnClick}/>
              </div>
              <div className="titlePage">
                Profil
              </div>
            </div>
          <div className="profileBrief">
            <img src={imgProfile}/>
            <div className="nameProfile">{nameProfile}</div>
          </div>
          <Card className="card">
            <div className="infoProfile">
              <div className="title">
                Kriteria
              </div>
              <div className="description">
                {/* {[...kriteria].map((item, index) => `${item}${(index != (kriteria.length-1)) && {, }}`)} */}
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
            <Divider />
            <div className="infoProfile">
              <div className="title">
                Sebagai Penyurvei
              </div>
              <div className="description">
                {sebagaiPenyurvei}
              </div>                
            </div>
            <Divider /> 
            <div className="infoProfile">
              <div className="title">
                Sebagai Responden
              </div>
              <div className="description">
                {sebagaiResponden}
              </div>                
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePage);