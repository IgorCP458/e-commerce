import { useEffect, useState } from 'react';
import { Hero } from '../Hero';
import ProductList from './ProductList';
import './style.css'

export const Home = () => {

    const [categories, setCategoriesJson] = useState<any[]>([])


    useEffect(() => {
        const fetchData = async () => {
            const categories = await fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            

            setCategoriesJson(categories.slice(0,4))
            console.log(categories.slice(0,4))
        }
        fetchData()
    }, [])
    
    return(
        <div className="max-w-none bg-slate-200 relative w-full">
            <Hero hero={{title: "Bem vindo ao E-co"}}/>
            <section className='sm:w-[90%] mx-auto mb-10'>

            {
                categories.map((lista) => (
                    <ProductList key={Math.random()} categorie={lista} list={lista} />
                ))
            }
            </section>
        </div>
    )
}