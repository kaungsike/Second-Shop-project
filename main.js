import './style.css'
import './node_modules/preline/dist/preline.js'
import Shop from './src/Shop.js'
import { createCartProduct } from './src/app/cartProduct.js';
import { products } from './src/core/variables.js';

const shop = new Shop;
shop.init();


console.log(createCartProduct(products[1],1));