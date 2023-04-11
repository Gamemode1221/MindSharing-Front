import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/fetchtest.css'

function Fetchtest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/user/list');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetchtest;