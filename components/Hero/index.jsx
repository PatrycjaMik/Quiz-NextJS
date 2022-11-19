import Image from "next/image";

export default function Hero() {
  return (
    <section className='relative aspect-[375/667] w-full'>
      <Image src="/images/konopnicka-tlo-02d1.png" layout='fill' alt="Co wiesz o Marii Konopnickiej - quiz?"/>

      <div className='absolute bottom-1/4' >
      <div className=" relative mr-5 ml-5 bg-primary border border-solid border-black z-10">
        <p className="p-6  text-4xl font-oswald font-bold font-sans text-black font-[700] uppercase">
          Co wiesz<br></br>
          <span> o Marii</span> Konopnickiej?
        </p>
      </div>
      <div className=" absolute left-9 -mt-5 w-60 bg-black  border border-solid border-black z-10">
        <p
          className="p-3  text-xl
        - font-bold font-oswald text-primary font-[600] uppercase"
        >
          sprawdź się i wygraj<br></br>
          <span> radioodbiornik</span>
        </p>
      </div>
      </div>
      </section>
  
  );
}
