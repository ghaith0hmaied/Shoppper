import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    // Check if all_product is defined before using it with the find method
    const product = all_product && all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            {/* Pass product only if it's defined */}
            <Breadcrum product={product} />
        </div>
    );
};

export default Product;
