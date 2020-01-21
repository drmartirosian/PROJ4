import React from 'react';
import './ProductListPage.css';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

function ProductListPage(props) {
  return (
    <>
      <h1>MARKETPLACE</h1>
      <div className='ProductListPage-grid'>
        {props.products.map(product =>
          <ProductListItem
            product={product}
            handleDeleteProduct={props.handleDeleteProduct}
            key={product._id}
          />
        )}
      </div>
    </>
  );
}

export default ProductListPage;