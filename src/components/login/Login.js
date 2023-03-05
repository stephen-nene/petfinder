import React from "react";
import NavBar  from '../nav/navbar';
import "./login.css"

export default function Login (){
    return (

    <div className="navdiv">
            <NavBar/>
    <div className="container">
        <section id="formHolder">

            <div className="row">

                {/* brandbox*/}
                <div className="col-sm-6 brand">
                    <a href="/" className="logo">Pets <span>.</span></a>

                    <div className="heading">
                    <h2>Pet Finder</h2>
                    <p>You are at the right place</p>
                    </div>

                    <div className="success-msg">
                    <p>Great! You are one of our members now</p>
                    <a href="/mypets" className="profile">Your Profile</a>
                    </div>
                </div>

                {/* form box */}
                <div className="col-sm-6 form">

                    {/* login form */}
     <div className="login form-peice switched">
        <form className="login-form" action="#" method="post">
           <div className="form-group">
              <label htmlFor="loginemail">Email Adderss</label>
              <input type="email" name="loginemail" id="loginemail" required />
           </div>

           <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input type="password" name="loginPassword" id="loginPassword" required />
           </div>

           <div className="CTA">
              <input type="submit" value="Login" />
              <a href="#new" className="switch">I'm New</a>
           </div>
        </form>

                    </div>

                    {/* signup form */}

                    <div className="signup form-peice">
                    <form className="signup-form" action="#" method="post">
           <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" name="username" id="name" className="name" />
              <span className="error"></span>
           </div>

           <div className="form-group">
              <label htmlFor="email">Email Adderss</label>
              <input type="email" name="emailAdress" id="email" className="email" />
              <span className="error"></span>
           </div>

           {/* <div className="form-group">
              <label htmlFor="phone">Phone Number - <small>Optional</small></label>
              <input type="text" name="phone" id="phone" />
           </div> */}

           <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" className="pass" />
              <span className="error"></span>
           </div>

           <div className="form-group">
              <label htmlFor="passwordCon">Confirm Password</label>
              <input type="password" name="passwordCon" id="passwordCon" className="passConfirm" />
              <span className="error"></span>
           </div>

           <div className="CTA">
              <input type="submit" value="Signup Now" id="submit" />
              <a href="#singup" className="switch">I have an account</a>
           </div>
        </form>

                    </div>

                </div>
            </div>

        </section>
    </div>

    </div>
    )

}
