import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'next/navigation';

const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {ProductId}= useParams();
    const product = all_product.find((e)=>e.id === Number(ProductId));
  return (
    <div>
      
    </div>
  )
}

export default Product;
