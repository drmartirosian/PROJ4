import React from 'react';
import {Link} from 'react-router-dom';
import './ProductListItem.css';

function ProductListItem({product, handleDeleteProduct}) {
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{product.name}</h3>
      </div>
      <div className='panel-footer ProductListItem-action-panel'>
        <Link
          className='btn'
          to={{
            pathname: '/details',
            state: {product}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn'
          to={{
            pathname: '/edit',
            state: {product}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn'
          onClick={() => handleDeleteProduct(product._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ProductListItem;