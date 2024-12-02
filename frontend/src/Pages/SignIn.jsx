import React, { useEffect } from "react";

function SignIn({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("signin");
  }, [setCurrentPage]);

  return (
    <div className="main-container">
      <h2>Sign In Page</h2>
      <div className="form-container login-page">
        <form className="row">
          <div className="col">
            <label>Username</label>
            <input type="text" />
          </div>
          <div className="col">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="submit-btn">
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
