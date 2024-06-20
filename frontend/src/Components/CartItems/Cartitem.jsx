import React, { useContext } from 'react';
import './Cartitem.css';
import { ShopContext } from '../../Context/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png';

const Cartitem = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

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
      {all_product.map((product) => { 
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="cartitemformat cartitemformatmain">
              <img src={product.image} alt="" className='carticonproducticon ' />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className='quantity'>{cartItems[product.id]}</button> 
              <p>${product.new_price * cartItems[product.id]}</p>
              <img className='removeicon' src={removeIcon} alt="" onClick={() => removeFromCart(product.id)} />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cart-items-total-items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-items-total-items">
                    <p>shipping fee</p>
                    <p>free</p>
                </div>
                <hr />
                <div className="cart-items-total-items">
                    <p>Total</p>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>if you have promocode enter it here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='Promocode' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
