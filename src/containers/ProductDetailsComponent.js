import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetailsComponent=()=>{
  const product = useSelector((state)=>state.allProducts.selectedProduct);
  const {id, title, image, price, category}=product;
  // console.log("id, etc...=>",id, title, image, price, category);
  const renderProduct=()=>{
    return (<div className='four wide column' key={id}>
        <div className='ui link cards'>
          <div className="card">
            <div className='image'>
              <img src={image} alt={title}/>
            </div>
            <div className='content'>
              <div className='header'>{title}</div>
              <div className='meta price'>${price}</div>
              <div className='meta'>{category}</div>
            </div>
          </div>
        </div>
      </div>)
  }

  return <>{renderProduct()}</>
}

export default ProductDetailsComponent;
