import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} =  useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-image-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="product-display-image">
            <img src={product.image} alt="" className="product-display-main-img" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
            <div className="product-display-price-old">${product.old_price}</div>
            <div className="product-display-price-new">${product.new_price}</div>
        </div>
        <div className="product-display-right-description">
        Introducing our exquisite collection of tops for women, designed to elevate your style and inspire confidence. Crafted with meticulous attention to detail, these tops showcase a perfect blend of fashion-forward trends and timeless elegance. Each piece is made from premium quality fabrics, ensuring a comfortable and luxurious feel against your skin. From vibrant prints to sophisticated solids, our tops offer versatility for any occasion. Whether you're dressing up for a special event or seeking everyday chicness, our tops effortlessly enhance your wardrobe. With their flattering cuts and impeccable fit, they effortlessly flatter your silhouette. Embrace fashion excellence and redefine your wardrobe with our stunning range of women's tops.
        </div>
        <div className="product-display-right-selectsize">
            <h1>Select Size</h1>
            <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className="product-display-right-category"><span>Category: </span> Women, T-shirt, Crop Top</p>
        <p className="product-display-right-tags"><span>Tags: </span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
