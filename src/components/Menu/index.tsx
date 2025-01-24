import { Link } from "react-router-dom";

export const Menu = () => {
  

  return (
    <header className="bg-white text-[#2B2B2B]">
        <nav className="flex justify-between w-[92%] mx-auto">
            <div className="flex items-center">
                <Link to="/" className=""><img className="w-16 hover:scale-110 duration-300" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..."></img></Link>
            </div>
            <div
                className="hidden sm:flex items-center">
                <ul className="flex gap-[4vw]">
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700 hover:shadow-xl duration-200"><Link to="/categorias" className="">Categorias</Link></li>
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700 hover:shadow-xl duration-200"><Link to="/ofertas" className="">Ofertas</Link></li>
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700 hover:shadow-xl duration-200"><Link to="/carrinho" className="">Carrinho</Link></li>
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700 hover:shadow-xl duration-200"><Link to="/vender" className="">Vender</Link></li>
                </ul>
            </div>
            <div className="flex itens-center py-2 px-2 hover:scale-105 duration-300">
                <button className="bg-emerald-500 px-5 py-4 rounded-full "><Link to="/conta" className="">Conta</Link></button>
            </div>
        </nav>
    </header>
  );
};

// //#87acec
// gray-500
// bg-[#a6c1ee]