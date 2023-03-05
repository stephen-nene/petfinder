import React from "react";
import NavBar from "../nav/navbar";
import "./login.css";

export default function Login() {
  return (
    <div className="navdiv">
      <NavBar />
      <div className="container">
        <section id="formHolder">
          <div className="row">
            {/* brandbox*/}
            <div className="col-sm-6 brand">
              <a href="/" className="logo">
                Pets <span>.</span>
              </a>

              <div className="heading">
                <h2>Pet Finder</h2>
                <p>You are at the right place</p>
              </div>

              <div className="success-msg">
                <p>Great! You are one of our members now</p>
                <a href="/mypets" className="profile">
                  Your Profile
                </a>
              </div>
            </div>

            {/* form box */}
            <div className="col-sm-6 form">
              {/* login form */}
              <div className="login form-peice switched">
                <form className="login-form" action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="loginemail">Email Address</label>
                    <input
                      type="email"
                      name="loginemail"
                      id="loginemail"
                      className="loginemail"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      name="loginPassword"
                      id="loginPassword"
                      className="loginPassword"
                      required
                    />
                  </div>

                  <div className="CTA">
                    <input type="submit" value="Login" id="login" />
                    <a href="#" className="switch">
                      I'm New
                    </a>
                  </div>
                </form>
              </div>

              {/* signup form */}
              <div className="signup form-peice">
                <form className="signup-form" action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Adderss</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="pass"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input
                      type="password"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      className="passConfirm"
                      required
                    />
                  </div>

                  <div className="CTA">
                    <input type="submit" value="Signup" id="signup" />
                    <a href="#" className="switch">
                      I have an account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
