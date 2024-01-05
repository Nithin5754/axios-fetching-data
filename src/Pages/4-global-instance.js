import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    const res =await axios(productsUrl)
    console.log(res);
    const resHello=await axios(randomUserUrl)
    console.log(resHello);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
