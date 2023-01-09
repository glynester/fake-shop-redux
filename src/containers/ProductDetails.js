import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useParams } from "react-router-dom";
import ProductDetailsComponent from './ProductDetailsComponent';

const ProductDetails=()=>{
  const product = useSelector((state)=>state.selectedProduct);
  console.log("product=>");
  console.log(product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log("productId: "+productId);
  const fetchProductDetail = async (productId)=>{
    const response = await axios.get('https://fakestoreapi.com/products/'+productId).catch((err)=>{
      console.log("There was an error: "+ err);
    });
    console.log("response.data");
    console.log(response.data);
    dispatch(selectedProduct(response.data)); // dispatch action when we get data.
  }

  // [productId] means this will run whenever the productId changes.
  // Cleanup to remove item goes in here. Otherwise previous item will display when you click on a new item.
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className='ui grid container'>
      <ProductDetailsComponent/>
    </div>
  )
}

export default ProductDetails;