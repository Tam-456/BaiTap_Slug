export interface CatalogProduct {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

export interface Catalog {
  Cateid: string;
  CateName: string;
  Products: CatalogProduct[];
}