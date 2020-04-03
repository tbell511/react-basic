import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {

    state = {
        email: "",
        password: "",
        invalidCreds: false,
    }
    emailInput = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    passwordInput = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    login = async (e) => {
        e.preventDefault()
        //to-do
    }
    render() {
        return (
            <div className="authWrapper">
                <h1 className="authHeader">Login</h1>
                <div className="authBox">
                    <form onSubmit={this.login} className="authForm">
                        <div className="authFormSection">
                            <label htmlFor="email">Email</label>
                            <input onChange={this.emailInput} type="email" required id="email" placeholder="email@example.com" value={this.state.email} />
                        </div>
                        <div className="authFormSection">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" required onChange={this.passwordInput} value={this.state.password} />
                        </div>

                        {this.state.invalidCreds && <div className="authFormError">Please enter a valid email address</div>}

                        <div className="authFormActions">
                            <a className="button button--clear" href="/forgot">I forgot my password</a>
                            <button className="button button--primary button--large">Login</button>
                        </div>
                    </form>
                </div>
                <Link className="authSubLink" to="/signup">I don't have an account yet</Link>
            </div>
        )
    }
}

export default Login