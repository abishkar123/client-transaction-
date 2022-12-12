import React, { useEffect, useState } from "react";
import { Layout } from '../components/layout/Layout'

import { TransForm } from '../components/form/TransForm';
import { TransTable } from '../components/table/TransTable';
import { fetchTrans } from "../utils/axiosHelper";


export const Dashboard = () => {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    getTrans();
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
