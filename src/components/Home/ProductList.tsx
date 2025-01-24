import { useEffect, useState } from "react";
import { Product } from "./Product";
import { CategoryType, ProductListType } from "./types";

interface ProductListProps {
    list: ProductListType
    categorie: CategoryType

}


const ProductList: React.FC<ProductListProps> = ({ list, categorie }) => {
  const [page] = useState(0)
  const [postsPerPage] = useState(4)
  const [postsJson, setPostsJson] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetch('https://dummyjson.com/products')
      const postsJson = await posts.json()
      const postsJsonSliced = postsJson.products.slice(page, page + postsPerPage)
      setPostsJson(postsJsonSliced)

      

    }
    fetchData()

  }, [])

  return (
    <section className="pt-6  bg-white my-10 px-10 py-10 ">
      <h2 className="text-2xl font-bold text-center text-[#5C5C5C]">{categorie}</h2>
      <div className="flex flex-row gap-4 mt-6">
        {postsJson.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>

  );
};

export default ProductList;
