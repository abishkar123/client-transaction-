import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInput } from "../components/layout/CustomeInput";
import { Layout } from "../components/layout/Layout";
import {Link }from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from "../utils/axiosHelper";
import { Alert } from "react-bootstrap";

export const Login = () => {
  const [info, setInfo] = useState({})
  const [response, setResponse] = useState({})


  const handleOnChange = (e) => {
    const { value,name} = e.target;
    console.log(value,name);

    setInfo({
      ...info, 
      [name]:value,
    })
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const {data} = await loginUser(info);
    setResponse(info); 
  };
 
  
 
  const inputFields = [
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "Pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  return (
    <Layout>
      <Form  onSubmit ={handleOnSubmit} className="login-page">
        <h2>Welcome Back! Login</h2>
        <hr />
        {response.status === "error" && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}
       
        {inputFields.map((item) => (
          <CustomeInput {...item}  onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="text-end">
          New here? <Link to="/register"> Register </Link>
        </div>
      </Form>
    </Layout>
  );
};