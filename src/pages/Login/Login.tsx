import axios from "axios";
import { useEffect, useState } from "react";
import type { User } from "../../types";
import "./Login.css";

function Login() {
  const [usernameinput, setUsernameinput] = useState("");
  const [passwordinput, setPasswordinput] = useState("");

  const [dbProfiles, setDbProfiles] = useState<User[]>([]);

  const [btnDisables, setBtnDisabled] = useState(false);

  const [massege, setMassege] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profiles");
        setDbProfiles(response.data);
      } catch {
        console.error(Error);
      }
    };
    getProfile();
  }, []);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const findUser = dbProfiles.find(
      (db) => db.username === usernameinput && db.password === passwordinput
    );

    if (findUser) {
      setMassege("Logging in...");
      localStorage.setItem("auth", "true");
      window.location.href = "/";
    } else {
      setMassege("No account exists.");
      setBtnDisabled(true);
      setTimeout(() => {
        setBtnDisabled(false);
      }, 4000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <form
        onSubmit={submitHandler}
        className="border border-secondary rounded-3 p-4 shadow-lg login-form"
      >
        <div className="form-group mt-3">
          <label htmlFor="exampleInputEmail1">username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            value={usernameinput}
            onChange={(e) => {
              setUsernameinput(e.target.value);
            }}
            required
            onInvalid={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity("Username is required.");
            }}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity("");
            }}
          ></input>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={passwordinput}
            onChange={(e) => {
              setPasswordinput(e.target.value);
            }}
            onInvalid={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity("رمز عبور الزامیست");
            }}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity("");
            }}
          ></input>
        </div>
        <button disabled={btnDisables} type="submit" className="submit-btn mt-3 w-100">
          Submit
        </button>
        <h5 className="text-center">{massege}</h5>
      </form>
    </div>
  );
}

export default Login;
