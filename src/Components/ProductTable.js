import React from 'react' ;
import PropTypes from 'prop-types';

const ProductTable = (products) => {
    return (
        <div>
        <table>
        <tr>
        <th>category </th>
        <th>name </th>
        <th>price </th>
       
        {
            products.map(product => { 
            return(
                
                        <tr>{product.category}</tr>
                        <tr>{product.name}</tr>
                        <tr>{product.price}</tr>
               
            )          
        }
     </table>
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
