import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", username: "", name: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
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
      () => this.props.router.push('/'));
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
		if (this.props.formType === 'login') {
			return (
				<div className="login-form-container">
					<div className="login-img">
						<img src="http://img06.deviantart.net/e46f/i/2012/185/0/2/old_camera_by_azheenfuad-d55xgdl.jpg" alt="pic"/>
					</div>
					<form onSubmit={this.handleSubmit} >
						{this.renderErrors()}
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
							<input type="submit" className="button"value="Log In" />
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
							<img src="http://img06.deviantart.net/e46f/i/2012/185/0/2/old_camera_by_azheenfuad-d55xgdl.jpg" alt="pic"/>
						</div>
						<form onSubmit={this.handleSubmit}>
							{this.renderErrors()}
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
