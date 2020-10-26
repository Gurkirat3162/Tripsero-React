import React, { Component } from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div className="base-container" >
                <div className="header">Welcome to Tripsero </div>
                <div className="content">
                    <div className="image"></div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlfor="username">Username</label>

                            <input type="text" name="username" placeholder="Username" />


                        </div>
                        <div className="form-group">
                            <label htmlfor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="text" >
                <a href="url">Forgot Password</a>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Login</button>
                </div>
            </div>


        );


    }

}
