import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import BackIcon from '@material-ui/icons/ArrowBack'

import './style.scss';


const titleNotif = "Rosa dan 4 orang lainya telah mengisi survei Anda!!";
const timeNotif = "12 Juli 2019";
const totalNotif = 3;

class NotificationPage extends React.Component {
  handleBackBtnClick=() => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="notif-page">
        <Helmet>
          <title>Pemberitahuan</title>
        </Helmet>
        <div className="header">
          <div className="navTop">
            <div className="back">
              <BackIcon onClick={this.handleBackBtnClick}/>
            </div>
            <div className="titlePage">
              Pemberitahuan
            </div>
          </div>
          <div>
          <Card className="card">
          {[...Array(totalNotif)].map((item, index) => (
              <div className="notifCard" key={`${index}d`}>
                <div className="notif">
                  <div className="titleNotif">
                    {titleNotif}
                  </div>
                  <div className="timeNotif">
                    {timeNotif}
                  </div>                
                </div>
                {index != (totalNotif-1) && <Divider />}
              </div>
          ))}
          </Card>
        </div>

        </div>
      </div>
    );
  }
}

export default withRouter(NotificationPage);