import './Login.css';
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import loginData from './user.json';
function Login() {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({ email: "", password: "" });
    const [show, setShow] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        const user = loginData.users.find(
            (person) => person.email === data.email && person.password === data.password
        );

        if (user) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }

    function handleChange(event) {
        let { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    function showHides() {
        setShow(!show);
    }
    return (
        <div className="login-container" >
            <head>
                <title>Microcampus</title>
            </head>
            <div className="inner">
                <div className="log-content">
                    <h1 className='log-head'>Welcome to MicroCampus</h1>
                    <p className='log-text'> Login to continue your journey</p>
                    <form onSubmit={handleSubmit}>
                        <input type='email'
                            className='email'
                            placeholder='Email Address'
                            value={data.email}
                            onChange={handleChange}
                            name="email" />
                        <br />
                        <div className="pswd">
                            {show ? (
                                <input
                                    type="text"
                                    className="pass"
                                    placeholder="Password"
                                    id="pswd"
                                    value={data.password}
                                    onChange={handleChange}
                                    name="password"
                                />
                            ) : (
                                <input
                                    type="password"
                                    className="pass"
                                    placeholder="Password"
                                    id="pswd"
                                    value={data.password}
                                    onChange={handleChange}
                                    name="password"
                                />
                            )}
                            {show ? (
                                <IoEyeOutline
                                    style={{ marginLeft: "-50px", width: "18.33px", height: "18.33px", color: "#57595A", cursor: "pointer" }}
                                    onClick={showHides}
                                />
                            ) : (
                                <IoEyeOffOutline
                                    style={{ marginLeft: "-50px", width: "18.33px", height: "18.33px", color: "#57595A", cursor: "pointer" }}
                                    onClick={showHides}
                                />
                            )}
                        </div>
                        <br />
                        <button className='btn-login'>Log in</button>
                        {status === false && data.email !== "" && (
                            <div className="text-error" style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
                                Details do not match with Database
                            </div>
                        )}
                        {status === true && data.email !== "" && (
                            <div className="text-success" style={{ color: "green", marginTop: "20px", textAlign: "center" }}>
                                Login Successful! Please wait while home is loading...
                            </div>
                        )}
                    </form>
                    <p className='google-log'><hr className='horizontal' /><span> or Login with google</span> <hr className='horizontal' /></p>
                    <br />
                    <div className="box">
                        <FaGoogle style={{ color: "#082755" }} /> <span className='google-btn'> Google</span>
                    </div>
                    <div className="register">
                        <p className='acc'>Don't have an account? <u>Register</u> here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login