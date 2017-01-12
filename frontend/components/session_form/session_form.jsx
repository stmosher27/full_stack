import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", username: "", name: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentWillReceiveProps(newProps) {
		if (this.props.formType !== newProps.formType) {
			this.setState({username: "", password: "", name: "", email: ""}, () => this.props.clearErrors());
		}
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user).then(
      () => this.props.router.push('/home'));
	}

	guestLogin(e) {
		e.preventDefault();
		this.state.username = "guest";
		this.state.password = "password";
		const user = this.state;
		console.log("processing form");
		this.props.processForm(user).then(
			() => this.props.router.push('/home')
		);

	}


	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		if (this.props.formType !== 'signup') {
			return (
				<div className="login-form-container">
					<div className="login-img">
						<img className="login-pic" src="http://img06.deviantart.net/e46f/i/2012/185/0/2/old_camera_by_azheenfuad-d55xgdl.jpg" alt="pic"/>
					</div>
					<form onSubmit={this.handleSubmit} >
						<div className="login-form">
							<label className="title">Trailgram</label>
							<br/>
								<input type="text"
									placeholder="username"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							<br/>
								<input type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							<br/>
							<div className="login-errors">{this.renderErrors()}</div>
							<input type="submit" className="button"value="Log In" />
							<button className="button" onClick={this.guestLogin}>Guest Log In</button>
						</div>
						<div className="login-link">
							Don't have an account?
							<Link to="/signup" className="curr-link" activeClassName="current">Sign up</Link>
						</div>
					</form>
				</div>
			);} else {
				return(
					<div className="signup-form-container">
						<div className="login-img">
							<img className="login-pic" src="http://img06.deviantart.net/e46f/i/2012/185/0/2/old_camera_by_azheenfuad-d55xgdl.jpg" alt="pic"/>
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className="login-form">
								<label className="title">Trailgram</label>
								<p className="signup-desc">
									Sign up to see photos of great views and trails!
								</p>
								<br/>
									<input type="text"
										placeholder="Email"
										value={this.state.email}
										onChange={this.update("email")}
										className="login-input" />
								<br/>
		              <input type="text"
										placeholder="username"
										value={this.state.username}
										onChange={this.update("username")}
										className="login-input" />
								  <br/>
		                <input type="name"
		  								placeholder="Full name"
		  								value={this.state.name}
		  								onChange={this.update("name")}
		  								className="login-input" />
		  						<br/>
									<input type="password"
										placeholder="Password"
										value={this.state.password}
										onChange={this.update("password")}
										className="login-input" />
								<br/>
								<div className="login-errors">{this.renderErrors()}</div>
								<input type="submit" className="button" value="Sign Up" />
							</div>
							<div className="login-link">
								Have an account?
								<Link to="/login" className="curr-link"activeClassName="current">Log In</Link>
							</div>
						</form>
					</div>
				);
			}
	}

}

export default withRouter(SessionForm);
