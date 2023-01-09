import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { useParams } from "react-router-dom";
import ProductDetailsComponent from './ProductDetailsComponent';

const ProductDetails=()=>{
  const product = useSelector((state)=>state);
  console.log("Single Product Listing"+product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log("productId: "+productId);
  const fetchProductDetail = async (productId)=>{
    const response = await axios.get('https://fakestoreapi.com/products/'+productId).catch((err)=>{
      console.log("There was an error: "+ err);
    });
    console.log(response.data);
    dispatch(selectedProduct(response.data)); // dispatch action when we get data.
  }

  useEffect(()=>{
    fetchProductDetail(productId)
  },[]);

  return (
    <div className='ui grid container'>
      <ProductDetailsComponent/>
    </div>
  )
}

export default ProductDetails;