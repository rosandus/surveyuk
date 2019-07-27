import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import './style.scss';

class SurveyCard extends React.Component {
    render() {
        const { title, deadline, respondent, tags } = this.props;
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
                    <div className="tags">
                        {[...tags].map((item, index) => (
                            <Button
                                variant="outlined"
                                color="primary"
                                className='tag'
                                key={`${index}b`}
                            >
                                {item}
                            </Button>
                        ))}
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

SurveyCard.propTypes = {
    title: PropTypes.string,
    deadline: PropTypes.string,
    respondent: PropTypes.any,
    tags: PropTypes.any
}

SurveyCard.defaultProps = {
    title: 'title',
    deadline: '',
    respondent: [],
    tags: []
}

export default SurveyCard;