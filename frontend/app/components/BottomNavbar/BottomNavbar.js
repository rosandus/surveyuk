import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import NotificationIcon from '@material-ui/icons/Notifications';
import HistoryIcon from '@material-ui/icons/History';
import ProfileIcon from '@material-ui/icons/AccountCircle';

import './style.scss';


class BottomNavbar extends React.Component {
    state = {
      value: 0,
      pathMap: [
        '/home',
        '/notification',
        '/history',
        '/profile'
      ]
    };

    componentWillReceiveProps(newProps) {
      const { pathname } = newProps.location;
      const { pathMap } = this.state;

      const value = pathMap.indexOf(pathname);

      if (value > -1) {
        this.setState({
          value
        });
      }
    }

    handleChange = (event, value) => {
      this.setState({ value });
    };

    render () {
      const { value, pathMap } = this.state;

      return (
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels={true}
          className="navbar"
        >
          <BottomNavigationAction
            className="navAction"
            component={Link}
            to={pathMap[0]}
            label="Beranda"
            icon={
              <HomeIcon className="navIcon" />
            }
          />
          <BottomNavigationAction
            component={Link}
            to={pathMap[1]}
            className="navAction"
            label="Pemberitahuan"
            icon={
              <NotificationIcon className="navIcon" />
            }
          />
          <BottomNavigationAction
            className="navAction"
            component={Link}
            to={pathMap[2]}
            label="Riwayat"
            icon={
              <HistoryIcon className="navIcon" />
            }
          />
          <BottomNavigationAction
            component={Link}
            to={pathMap[3]}
            className="navAction"
            label="Profil"
            icon={
              <ProfileIcon className="navIcon" />}
          />
        </BottomNavigation>
      );
    }
}

export default withRouter((BottomNavbar));
