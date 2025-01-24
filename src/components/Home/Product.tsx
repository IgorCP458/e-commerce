// src/features/Home/Product.tsx
import { ProductType } from './types';

interface ProductProps {
  product: ProductType;
}


export const Product = ({ product }: ProductProps) => {
  return (
    <div className="border p-4 grow min-w-80 h-80 flex-nowrap rounded shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p>R$ {product.price}</p>
    </div>
  );
};

