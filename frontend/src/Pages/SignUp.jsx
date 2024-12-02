import React, { useEffect } from "react";

function SignUp({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("signup");
  }, [setCurrentPage]);

  return (
    <div className="main-container">
      <h2>Sign Up Page</h2>
      <div className="form-container register-page">
        <form className="row">
          <div className="col">
            <label>Select</label>
            <input type="file" />
          </div>
          <div className="col">
            <label>Username</label>
            <input type="text" />
          </div>
          <div className="col">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="col">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="submit-btn">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
