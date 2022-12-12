import React, { useState } from 'react'
import {Row,Col} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { postTrans } from '../../utils/axiosHelper';

import {  toast } from 'react-toastify';


export const TransForm = ({getTrans}) => {
  const initialState ={
    name: "",
    type:"",
    amount: "",
  };
  const [form, setForm] = useState(initialState);
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
      const { value,name} = e.target;
      console.log(value,name);
  
      setForm({
        ...form, 
        [name]:value,
      })
    };

    const handleOnSubmit = async (e) => {
      e.preventDefault();
      // cal api it send data to database
      const {status, message}= await postTrans(form);
      console.log(status, message, )
      toast[status](message);
      status === "success" && getTrans();
  
     };
   
  return (
    <div className="form"> 
     <form   onSubmit={handleOnSubmit} >
     <Row className=' mt-3 gap-2'>
     <Col md="2">
     <Form.Select name ="type" onChange={handleOnChange} value={form.type} aria-label="Default select example">
      <option></option>
      <option value="income">Income</option>
      <option value="expanse">Expense</option>
    </Form.Select>

    </Col>
    <Col md="5" className="">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="text" name="name" placeholder="Transaction Name" onChange={handleOnChange}  value={form.name}/>
    </Form.Group>
    </Col>

    <Col md="2" className="">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="number" name="amount"  placeholder=" amount i.e. 500" onChange={handleOnChange}  value={form.amount}/>
    </Form.Group>
    </Col>

    <Col md="2" className=''>
    <Button variant="primary" type="submit"> 
    <i class="fa-solid fa-circle-check "></i>
    </Button>
    </Col>
 
    </Row>

 </form>
</div>
  )
};
