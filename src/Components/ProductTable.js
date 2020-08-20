import React from 'react' ;
import PropTypes from 'prop-types';

const ProductTable = (products) => {
    return (
        <div>
        { products.map(product => { 
            return(
                <table>
                        <tr>{product.category}</tr>
                        <tr>{product.name}</tr>
                        <tr>{product.price}</tr>
                 </table>
            )          
        }
        )
        }
        </div>
    );
}
ProductTable.propTypes = {
    category : PropTypes.string,
    name : PropTypes.string,
    price : PropTypes.number
}
ProductTable.defaultProps = {
    name:  'product',
    price:  '1000',
    category: 'Anyproduct'
  };

  

  export default ProductTable ;