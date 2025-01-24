import { HeroType } from "../Home/types";


interface HeroProps {
  hero: HeroType
}


export const Hero = ({hero}: HeroProps) => {
  return (
    <div className="w-full h-[42vh] bg-gradient-to-tr from-indigo-500 from-5% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
        {hero.title}
      </h1>
      <p className="text-white mt-4 text-lg md:text-xl text-center">
        Explore nossos produtos e serviços.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-lg  hover:shadow-xl hover:scale-105 duration-800">
        Saiba Mais
      </button>
    </div>
  );
};
