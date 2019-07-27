import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import './style.scss';

class QuestionCard extends React.Component {
  render() {
    const { title, deadline, respondent } = this.props;
    // console.log(tags);
    // console.log(tags.length);
    return (
      <Card className="card">
        <div className="expSurvey">
          <div className="titleSurvey">
              {title}
          </div>
          <div className="deadlineSurvey">
              Batas Pengisian: {deadline}
          </div>
          <div className="respondent">
              {respondent.length > 0 && (`${respondent.join("/")} responden`)}
          </div>

        </div>
        <div className="footer">
          {respondent.length === 0 && (
              <Button size="small" color="primary">
                  Isi Survei
              </Button>
          )}
          {respondent.length > 0 && (
              <Button size="small" color="primary">
                  Cek Survei
              </Button>
          )}                    
        </div>
      </Card>
    );
  }
}

QuestionCard.propTypes = {
    title: PropTypes.string,
    deadline: PropTypes.string,
    respondent: PropTypes.any
}

QuestionCard.defaultProps = {
    title: 'title',
    deadline: '',
    respondent: []
}

export default QuestionCard;