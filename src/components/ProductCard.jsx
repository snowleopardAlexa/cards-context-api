import './ProductCard.css'
import Rating from './Rating'

const ProductCart = ({ product }) => {
  return (
    <div className="product__cart__wrapper">
       <img className="product__card__img" src={product.image} alt="product" />
       <h4>{product.name}</h4>
       <div className="product__card__price">
         <h5>{product.price}</h5>
       </div>
       <div className="product__card__rating">
         <Rating value={product.rating} text={`${product.numReviews} reviews`} />
       </div>
       <button className="product__card__button">
         Add to cart
       </button>
    </div>
  )
}

export default ProductCart