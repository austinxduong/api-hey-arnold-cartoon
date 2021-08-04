import React, { useState, useEffect } from 'react';
import CartoonDetail from '../components/CartoonDetail/CartoonDetail';
import { fetchCartoonById } from '../services/heyArnoldApi';
import { useParams } from 'react-router-dom';

const CartoonDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [cartoon, setCartoon] = useState({});
  const { _id } = useParams();

  useEffect(async () => {
    const cartoonMatch = await fetchCartoonById(_id);
    setCartoon(cartoonMatch);
    setLoading(false);
  }, [_id]);
    
  if(loading) return <h1>en route... </h1>;
  return <CartoonDetail {...cartoon} />;
};

export default CartoonDetailPage;
