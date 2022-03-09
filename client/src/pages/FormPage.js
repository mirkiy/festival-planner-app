import React from "react";

const FormPage = () => {
  return (
    <div className="outer">
      <form className="inner">
        <h3>Log in</h3>

        <div className="form-group">
          <label className="custom-control-label">Email</label>
          <input
            type="email"
            className="form-control "
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label className="custom-control-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label label-remember-me" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="submit-custom">
          <button type="submit" className="btn btn-custom btn-lg btn-block">
            Sign in
          </button>
          <p className="forgot-password text-right">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
