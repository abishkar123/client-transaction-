import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInput } from "../components/layout/CustomeInput";
import { Layout } from "../components/layout/Layout";
import {Link }from "react-router-dom";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { postUser } from "../utils/axiosHelper";


export const Register = () => {
const [form, setForm] = useState({})
const [response, setResponse] = useState({})

  const handleOnChange = (e) => {
    const { value,name} = e.target;
    console.log(value,name);

    setForm({
      ...form,
      [name]:value,
    })
  };

  const handleOnSubmit =  async(e) => {
    e.preventDefault();
    const {data} = await postUser(form);
    setResponse(data); 
  };
 

  const inputFields = [
    {
      label: "Name",
      placeholder: "Same Smith",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "pin",
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
      <Form onSubmit ={handleOnSubmit}className="login-page">
        <h2>Register Here</h2>
        <hr />
        {
          response.message && <Alert variant={response.status ==='success' ? 'success' : "danger"}>{response.message}</Alert>
        }
        {inputFields.map((item) => (
          <CustomeInput {...item} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Register 
        </Button>
        <div className="text-end mt-5">
        <Link to="/"> Login Now </Link>
        </div>
      </Form>
      
    </Layout>
  );
};