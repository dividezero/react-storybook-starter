import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Screen from '../../container/screen';
import { createConsent } from '../../services/api';

class Tnc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      isValidEmail: false,
      email: ''
    }
  }

  submit = async () => {
    const { email, isChecked } = this.state;
    const { appInfo: { appId, consentId } } = this.props;
    const LN = 'https://datum.org/terms/';
    const payload = {
      appId,
      consentId,
      timestamp: new Date().getTime(),
      userInfo: { email },
      LN: { terms: LN, privacy: LN },
      PS: { form: 'Agree to Datum Terms and Conditions', authenticated: "true" },
      SC: { emailMarketing: isChecked }
    };

    const request = await createConsent(payload);
    if (request.status === "success") {
      const reply = JSON.stringify({
        message: request.message,
        status: request.status,
        data: {
          consentId: request.data.consentId
        }
      });
      window.webkit.messageHandlers.callbackHandler.postMessage(reply);
    }
  };

  toggleChecked = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  };

  changeEmail = (event) => {
    const { value } = event.target;
    const isValidEmail = this.validateEmail(value);

    this.setState({ email: value, isValidEmail })
  };

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { isChecked, isValidEmail, email } = this.state;
    const isDisabled = !(isChecked && isValidEmail);

    return (
      <div>
        <Screen>
          <div className="rootFlex">
            <div className="flexContainer">
              <h2>Authorize access to your data</h2>
              <p>Datum stores your email to send you relevant offers from time to time. We do not share your email with anyone else.</p>
            </div>
            <div className="flexContainer">
              <input type="email" className="input" placeholder="Your Email Address" value={email} onChange={this.changeEmail}/>
              <div className="checkboxContainer">
                <div className="checkContainer">
                  <input type="checkbox" className="checkbox" value={isChecked} onClick={this.toggleChecked}/>
                </div>
                <div className="contentContainer">
                  <p className="tncText">By submitting your email, you agree that we may send you emails from our partners about upcoming services and promotions. You may un subscribe at any time.</p>
                  <p className="tncText">Learn more about our <u><b><a href="https://datum.org/terms/">Privacy Policy</a></b></u> and <u><b><a href="https://datum.org/terms/">Terms & Conditions</a></b></u></p>
                </div>
              </div>
            </div>
            <div className="flexContainer">
              <button type="button" className="submitButton" onClick={this.submit} disabled={isDisabled}>
                Confirm
              </button>
            </div>
          </div>
        </Screen>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appInfo: state.appInfo
});

export default connect(mapStateToProps)(Tnc);
