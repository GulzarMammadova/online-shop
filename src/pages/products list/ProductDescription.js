import '../../App.css';
// import { FiveStarRating } from '../../buttons/FiveStarRating';
import './ProductList';

export const Product = ({  
    post: { img, title, model, price, count, info}, index }) => {
      return (  
        <div className="item-container">
          <img className="image" src={img} alt="product" />
          <h3 className="title">{title}</h3>
          <p className="model">{model}</p>
          <p className="price">{price}</p>
          <p className="count">{count}</p> <button className='btn-add'>+</button>

          {/* <FiveStarRating rating={rating} /> <div>{rating} / 5</div> */}
          {/* <p className="info">{info}</p> */}
        </div>
      );
    };

// export function ProductDescription({ product }) {
//     const rating = product.vote_average / 2;
//     return (
//         <div className="product-content">
//             <div className='description-top'>
//                 <div className="image">
//                 </div>
//                 <span className="title">{product.name}</span>
//                 <p className="model">{product.model}</p>
//                 {product && <FiveStarRating rating={rating} />} <div>{rating} / 5</div>
//             </div>
//             <button>Add to Bag</button>
//             <div className="description-bottom">
//                 <h3>Description</h3>
//                 <p>{product.overview}</p>
//             </div>

//         </div>
//     );
// }