import React, { Component }  from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4'
import PropTypes from 'prop-types';
import Screen from '../../container/screen';
import { load } from '../../redux/actions/appInfo';
import './style.css';

class Home extends Component {

  componentWillMount() {
    const { match: { params }, load } = this.props;
    const consent = typeof params.consentId === 'undefined' ? uuid().replace(/-/g, '') : params.consentId;
    console.log(consent);
    load(params.appId, consent)
  }

  toTnc = () => {
    const { history } = this.props;
    return history.push('/tnc');
  };

  render() {
    return (
      <Screen>
        <div className="container">
          <h1 className="hashtag">#TakeBackYourData</h1>
        </div>
        <div className="container">
          <p className="title">Get free stuff sponsored by our partners</p>
          <p className="text">Datum rewards users for sharing their data</p>
          <p className="text">#TakeBackYourData</p>
        </div>
        <div className="container">
          <div className="commentContainer">
            <p className="indicator">!</p>
            <p className="comment">You can opt-out at any time</p>
          </div>
          <button type="button" className="button" onClick={this.toTnc}>Let's Go</button>
        </div>
      </Screen>
    )
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

const mapStateToProps = state => ({
  appInfo: state.appInfo
});

const mapDispatchToProps = dispatch => ({
  load: (appId, consentId) => dispatch(load(appId, consentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
