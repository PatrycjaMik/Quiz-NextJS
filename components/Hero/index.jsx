import Image from "next/image";

export default function Hero({ expired }) {
  return (
    <section className="relative aspect-[375/667] md:aspect-[1920/700]  w-full">
      <Image
        src="/images/konopnicka-tlo-02d1.png"
        layout="fill"
        alt="Co wiesz o Marii Konopnickiej - quiz?"
        className="block md:invisible"
      />
      <div className="lg: bg-[url('/images/desktop-bg-header.png')] md:w-full md:h-[700px] md:bg-no-repeat md:bg-cover md:bg-center"></div>

      <div className="absolute bottom-1/4 md:top-[30%] md:left-[15%] ">
        <div className=" relative mr-5 ml-5  border-1 border-solid border-black z-10 md:w-[280px] lg:w-[470px] lg:h-[230px] ">
          <p className="p-6  text-4xl font-oswald font-bold font-sans text-black font-[700] uppercase lg:text-[50px] lg:p-8 lg:leading-[55px]">
            Co wiesz<br></br>
            <span> o Marii</span> Konopnickiej?
          </p>
        </div>
        <div className=" absolute left-9 -mt-5 w-60 bg-black  border border-solid border-black z-10 lg:w-[414px] lg:h-[136px]">
          <p
            className="p-3  text-xl
        - font-bold font-oswald text-primary font-[600] uppercase  lg:text-[36px]  lg:leading-[55px]"
          >
            {!expired && (
              <>
                <span>sprawdź się i wygraj</span>
                <br></br>
                <span> radioodbiornik</span>
              </>
            )}
            {expired && <span>quiz zakończony</span>}
          </p>
        </div>
      </div>
    </section>
  );
}
