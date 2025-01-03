import { useContext } from 'react';
import './shop.styles.scss'


import ProductCard from '../../components/product-card/product-card.component';
import { Productcontext } from '../../contexts/products.context';

const Shop = () => {
    const products = useContext(Productcontext)
    return(
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))} 
        </div>
    )
}

export default Shop;