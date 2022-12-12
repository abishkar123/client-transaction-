import React, { useEffect, useState } from "react";
import { Layout } from '../components/layout/Layout'

import { TransForm } from '../components/form/TransForm';
import { TransTable } from '../components/table/TransTable';
import { fetchTrans } from "../utils/axiosHelper";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {
  const navigate = useNavigate();
  const [trans, setTrans] = useState([]);
  

  useEffect(() => {
    getTrans();

    const user = JSON.parse( sessionStorage.getItem("user"));
     console.log(user)
     !user && navigate("/")
  }, []);
  const getTrans = async () => {
    const { trans } = (await fetchTrans()) ||[];
    setTrans(trans);
  };

  console.log(trans);
  return (

    <Layout>
     <div className="form"> 
      <TransForm getTrans={getTrans}/>
     </div>

     <div className="table"> <TransTable  trans={trans} getTrans={getTrans}/></div>  
     </Layout>
  );
};
