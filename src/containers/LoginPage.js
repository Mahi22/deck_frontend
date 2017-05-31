import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
      },
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
  * Process the form.
  *
  * @param {object} event - the JavaScript event object
  */
  processForm(event) {
    // prevent the default action in this case, action is the form submission event
    event.preventDefault();

    if (this.state.user.email === 'hello' && this.state.user.password === 'world') {
      this.props.history.push('/');
    }
  }

  /**
  * Change the user object
  *
  * @param {object} event - the JavaScript event object
  */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }


  /**
   * render - Render the component
   *
   * @return {JSX object}  element to render
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user} />
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LoginPage);
