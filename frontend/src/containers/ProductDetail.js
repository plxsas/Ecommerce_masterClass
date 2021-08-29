import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_product } from '../actions/products';
import ProductDetailCard from '../components/ProductDetailCard';


const ProductDetail = ({ 
    match, 
    product, 
    get_product
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const productId = match.params.id;

        get_product(productId);
    }, [match.params.id]);

    console.log('heloo');
    return (
        <div className='container mt-5'>
            <ProductDetailCard
                product={product}
            />

        </div>
    )
};

const mapStateToProps = state => ({
    product: state.products.product
});

export default connect(mapStateToProps, {
    get_product
})(ProductDetail);