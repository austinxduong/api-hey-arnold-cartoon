import React, { useState, useEffect } from 'react';
import CartoonList from '../components/CartoonList/CartoonList';
import { fetchAllCartoons } from '../services/heyArnoldApi';

const Cartoon = () => {
  const [loading, setLoading] = useState(true);
  const [cartoons, setCartoons] = useState([]);

  useEffect(async () => {
    const cartoons = await fetchAllCartoons();
    setCartoons(cartoons);
    setLoading(false);
  }, []);

  if(loading) return <h1>en route....</h1>;
  return <CartoonList cartoons={cartoons} />;
};

export default Cartoon;
