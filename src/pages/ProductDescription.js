import '../App.css';
import { FiveStarRating } from '../buttons/FiveStarRating';

export function ProductDescription({ product }) {
    const rating = product.vote_average / 2;
    return (
        <div className="product-content">
            <div className='description-top'>
                <div className="image">
                    {/* image  */}
                </div>
                <span className="title">{product.name}</span>
                <p className="model">{product.model}</p>
                {product && <FiveStarRating rating={rating} />} <div>{rating} / 5</div>
            </div>
            <button>Add to Bag</button>
            <div className="description-bottom">
                <h3>Description</h3>
                <p>{product.overview}</p>
            </div>

        </div>
    );
}


