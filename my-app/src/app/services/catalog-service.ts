import { Injectable } from '@angular/core';
import { Catalog } from '../classes/ICatalog';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas: Catalog[] = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca',  Price: 100, Image: 'https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/pepsi.jpg' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://bizweb.dktcdn.net/thumb/grande/100/469/765/products/1e929e3a4f03c7c07b2233c5d6fbb9a3.jpg' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heleiken', Price: 500, Image: 'https://bizweb.dktcdn.net/thumb/medium/100/469/765/products/heii.jpg' },
        { ProductId: 'p5', ProductName: '333',      Price: 400, Image: 'https://bizweb.dktcdn.net/thumb/medium/100/469/765/products/333a-1a98c6a2-f501-484c-9a39-5c8d873ed5a0.jpg' },
        { ProductId: 'p6', ProductName: 'Sai Gon',  Price: 600, Image: 'https://bizweb.dktcdn.net/100/469/765/products/bia-sai-gon-chill-lon-330ml-202201211121006720-efbe86d2-613b-4eb9-8020-e3e7d262badc.jpg?v=1691046433343' },
      ],
    },
  ];

  constructor() {}

  getCategories(): Catalog[] {
    return this.datas;
  }
}