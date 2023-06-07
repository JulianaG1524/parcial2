import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import buildingsImage from '../buildings.jpg';
import { useIntl ,FormattedMessage } from "react-intl";

function Login() {
  const navigate = useNavigate();
  const intl = useIntl();
  const [loginStatus, setLoginStatus, response] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      const response = await axios.post(
        "http://localhost:2000/login",
        {
          email: email.value,
          password: password.value,
        },
      );

      const rol = response.data.rol;
      sessionStorage.setItem("rol", rol);
      
      setLoginStatus("Success");
    } catch (error) {
      setLoginStatus("Error");
    }
  };

return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: `url(${buildingsImage}) center/cover`,
          filter: 'blur(10px)',
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgb(82,87,168,0.6)',
          height: '55vh',
          width: '32vw',
          borderRadius: '8px',
          top: '20vh',
        }}
      >
        <div
          style={{
            textAlign: 'left',
            margin: '8vh 8vw',
          }}
        >
          <h1 style={{color: 'white', marginBottom: '2vh'}}>
            <span
              style={{
                display: 'inline-block',
                width: '28px',
                height: '28px',
                borderRadius: '20%',
                backgroundColor: 'white',
              }}
            ></span>
            <FormattedMessage id="Logo"/>
          </h1>
          <h2 style={{color: 'white', fontWeight: 'bold', fontSize: '20px', marginBottom: '5vh', marginTop: '0vh', paddingLeft: '2px'}}><FormattedMessage id="Log"/></h2>
          <form onSubmit={handleSubmit} style={{color: 'white'}}>
          <input
            type="email"
            name="email"
            placeholder= {intl.formatMessage({id: "Username"})}
            style={{
              border: 'none',
              borderBottom: '1px solid white',
              background: 'transparent',
              color: 'white',
              marginBottom: '5vh',
              paddingTop: '8px',
              paddingBottom: '8px',
              width: '100%'
            }}
          />
          <input
            type="password"
            name="password"
            placeholder= {intl.formatMessage({id: "Password"})}
            style={{
              border: 'none',
              borderBottom: '1px solid white',
              background: 'transparent',
              color: 'white',
              marginBottom: '4vh',
              paddingTop: '8px',
              paddingBottom: '8px',
              width: '100%'
            }}
          />
          <button 
            type="submit"
            style={{
              width: '100%',
              height: '40px',
              backgroundColor: '#51bbdb',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '4px'
            }}
          >
            <FormattedMessage id="Login"/>
          </button>
            {loginStatus === "Success" && navigate("/books")}
            {loginStatus === "Error" && <div style={{textAlign: 'center', color: 'red', marginTop: '12px'}}>Invalid credentials</div>}
          </form>
        </div>
        <div 
          style={{
            textAlign: 'center',
          }}
        >
          <h3 style={{color: 'white', fontSize: '20px'}}>
            <FormattedMessage id="Cantlogin"/>
          </h3>
          <h4 style={{color: 'white', fontWeight: 'lighter', fontSize: '16px' }}>
            <FormattedMessage id="Privacy"/>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
