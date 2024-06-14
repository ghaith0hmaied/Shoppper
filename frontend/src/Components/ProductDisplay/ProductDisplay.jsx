import React, { useContext } from 'react'
import './ProductDisplay.css'
import start from '../Assets/star_icon.png'
import start_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const { product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productleft">
        <div className="imglist">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplayimg">
            <img className='productdisplaymainimg' src={product.image} alt="" />
        </div>
      </div>
      <div className="productright">
        <h1>{product.name}</h1>
        <div className="productrightstart">
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start_dull} alt="" />
            <p>(122)</p>
        </div>
        <div className="productrightprice">
            <div className="prices-new">
                ${product.new_price}
            </div>
            <div className="item-price-old">
                ${product.old_price}
            </div>
        </div>    
            <div className="productdiscrip">Ce texte généré aléatoirement (lorem ipsum) peut être utilisé dans vos maquettes (webdesign, sites internet, livres, affiches...) gratuitement. Ce texte est entièrement libre de droit..</div>
            <div className="productrightsizes">
                <h1>Select Size</h1>
                <div className="productrightsize">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
                    <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
                    <p className='category'><span>Category : </span>Women , T-shirt ,Crop top</p>
                    <p className='category categoryz'><span>Tags : </span>Modern , Latest </p>

                
            
        </div>
      </div>
    
  )
}

export default ProductDisplay
