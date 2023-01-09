import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetailsComponent=()=>{
  const product = useSelector((state)=>state.selectedProduct);
  const {id, title, image, price, category, description}=product;
  console.log("id, etc...=>",id, title, image, price, category);
  const renderProduct=()=>{
    
    return (
      Object.keys(product).length===0 ? ( 
        <div>...Loading</div> 
      ) : (
      <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider">AND</div>
        <div className="middle aligned row">
          <div className="column lp">
            <img className="ui fluid image" src={image} />
          </div>
          <div className="column rp">
            <h1>{title}</h1>
            <h2>
              <a className="ui teal tag label">${price}</a>
            </h2>
            <h3 className="ui brown block header">{category}</h3>
            <p>{description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
    
  )
  }

  return <>{renderProduct()}</>
}

export default ProductDetailsComponent;
