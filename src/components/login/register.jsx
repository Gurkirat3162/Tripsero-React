import React, { Component } from 'react';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="base-container" >
                <div className="header">Register </div>
                <div className="content">
                    <div className="image"><img src={require('../../logo.svg')} /></div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlfor="e">Fullname</label>
                            <input type="text" name="fullname" placeholder="Fullname" />


                        </div>
                        <div className="form-group">
                            <label htmlfor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlfor="phone">Phone</label>
                            <input type="text" name="phone" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <label htmlfor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlfor="password">Confirm Password</label>
                            <input type="password" name="Confirm password" placeholder="Confirm Password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Login</button>
                </div>
            </div>


        );


    }

}
