"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./globalComponenets/header";
let USER_DB = "admin";
let PASS_DB = "admin";
export default function Home() {
  let [user, setUser] = useState({
    username: "",
    pwd: "",
    repeatpwd: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      user.username === USER_DB &&
      user.pwd === PASS_DB &&
      user.pwd === user.repeatpwd
    ) {
      console.log("Welcome" + " " + user.username);
      alert("Welcome" + " " + user.username);
    } else {
      console.log("Invalid");
      alert("Invalid Login Details");
    }
  };

  const onUserUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log({ ...user, [name]: value });
  };

  return (
    <>
      <Header />
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-12">
            <button className="btn btn-warning">
              <Link className="text-decoration-none text-dark" href={"./menu"}>
                {" "}
                Menu
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="username"
                  value={user.username}
                  onChange={onUserUpdate}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="pwd"
                  value={user.pwd}
                  onChange={onUserUpdate}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  name="repeatpwd"
                  value={user.repeatpwd}
                  onChange={onUserUpdate}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
