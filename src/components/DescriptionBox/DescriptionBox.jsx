import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
            An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer to customers.
        </p>
        <p>
            E-commerce websites typically include a search bar, product listings, detailed product descriptions, user reviews, and shopping cart functionality, making it easy for customers to find, compare, and purchase products from the comfort of their homes or on the move.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
