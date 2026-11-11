import { Service } from '@angular/core';
import { ProductImage } from '../classes/IProductImage';

@Service()
export class ProductImageService {
     productsImage: ProductImage[] = [
    { ProductId: 'p1', ProductName: 'Coca',  Price: 100, Image: 'https://bizweb.dktcdn.net/thumb/large/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/pepsi.jpg' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/1e929e3a4f03c7c07b2233c5d6fbb9a3.jpg' },
  ];

  constructor() {}

  getProductsWithImages(): ProductImage[] {
    return this.productsImage;
  }

  getProductDetail(id: any): ProductImage | undefined {
    return this.productsImage.find((x) => x.ProductId == id);
  }
}
