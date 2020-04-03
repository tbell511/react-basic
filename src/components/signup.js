import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <div className="authWrapper">
                <h1 className="authHeader">Signup</h1>
                <div className="authBox">
                    <form className="authForm">
                        <div className="authFormSection">
                            <label htmlFor="email">Email</label>
                            <input id="email" placeholder="email@example.com"/>
                        </div>
                        <div className="authFormSection">
                            <label htmlFor="password">Password</label>
                            <input id="password" />
                        </div>
                        <div className="authFormActions">
                            <button className="button button--primary button--large" style={{margin: '25px auto 0px', display: 'flex'}}>Create my account</button>
                        </div>
                    </form>
                </div>
                <Link className="authSubLink" to="/login">I already have an account</Link>
            </div>
        )
    }
}

export default Signup