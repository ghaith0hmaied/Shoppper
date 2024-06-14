import React, { useContext } from 'react'
import './Cartitem..css'
import { ShopContext } from '../../Context/ShopContext'
import remoceIcon from '../Assets/cart_cross_icon.png'
const Cartitem = () => {
    const {all_product,cartItem,removeFromCart}= useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitemformatmain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItem[e.id]>0){
            return<>
             <div key={e.id} className="cartitemformat cartitemformatmain">
                <img src={e.image} alt="" className='carticonproducticon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='quantity'>{cartItem[e.id]}</button>
                <p>${e.new_price*cartItem[e.id]}</p>
                <img className='removeicon' src={remoceIcon} alt="" onClick={()=>removeFromCart(e.id)} />
            </div>
            <hr />
            </>
                
            
        }
        
        return null;
      })}
    </div>
  )
}

export default Cartitem
