import { Service } from '@angular/core';
import { Product } from '../classes/IProduct';

@Service()
export class ProductService {
    products: Product[] = [
          { id: 1, name: 'IP 18 màu đen', price: 999, image:'https://minhtuanmobile.com/uploads/products/260910090831-iphone-18-pro-black-pdp-images-vi-vn.png' },
          { id: 2, name: 'IP 18 màu đỏ', price: 19.99, image:'https://minhtuanmobile.com/uploads/products/iphone-18-pro-512gb-chinh-hang-vn-260910065501.png' },
          { id: 3, name: 'IP 18 màu trắng', price: 5.99, image:'https://minhtuanmobile.com/uploads/products/260910065535-iphone-18-pro-512gb-chinh-hang-vn-2.png' },
        ]
    constructor() {}
    getProducts()
    {
        return this.products;
    }

}
