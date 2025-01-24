import { Link } from "react-router-dom";

export const Footer = () => {  

  return (
    <div className="bg-white text-[#2B2B2B]">
        <footer className="flex items-center w-[92%] mx-auto">
            <div
                className="flex grow items-center">
                <ul className="flex gap-[4vw] mx-auto">
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700  duration-200"><Link to="/contato" className="">Contato</Link></li>
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700  duration-200"><Link to="/desenvolvedores" className="">Desenvolvedores</Link></li>
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700  duration-200"><Link to="/sobre" className="">Quem somos nós</Link></li>
                <li className="p-4 rounded-lg cursor-pointer hover:text-emerald-700  duration-200"><Link to="/termos" className="">Termos e Condições</Link></li>
                </ul>
            </div>
        </footer>
    </div>
  );
};
