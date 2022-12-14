import Image from "next/image";
import { SideBorderBox } from "../SideBorderBox";

export default function Winners() {
  return (
    <section className="relative bg-black">
      <div className="absolute  top-0 right-0 w-1/2  md:w-2/3 md:h-1/5">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
      </div>

      <div className="pt-28 w-[85%] m-auto pb-10 md:pb-20">
        <div className="max-w-[900px] m-auto pb-40">
          <p className=" text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase pt-1 mb-16 ">
            Co wiesz o Marii Konopnickiej?
          </p>
          <SideBorderBox containerClass="h-[1700px] min-[425px]:h-[1600px]  z-10">
            <div className="flex justify-center items-center flex-col min-[425px]:h-full">
              <div className="border-b-[1px] border-black w-[90%] m-auto pb-[30px] mt-4 h-full">
                <p className=" text-[17px]  md:text-[35px] md:mt-10 font-bold font-oswald text-center mt-4 p-1 min-[400px]:text-[24px] min-[600px]:text-[30px] min-[425px]:mb-4 ">
                  Oto nasi zwycięzcy, którzy poprawnie odpowiedzieli na
                  wszystkie pytania i przygotowali ciekawe odpowiedzi kreatywne,
                  na pytanie: Co słonko widziało?
                </p>
              </div>
              <div className="w-[90%] p-[20px]">
                <p className="text-[26px] md:text-[35px] min-[600px]:text-[30px] font-[600] font-oswald min-[425px]:mt-[15px]">
                  Karol
                </p>
                <p className="text-[18px] min-[425px]:text-[20px] md:text-[25px]  font-[400] font-oswald">
                  Cały workday słonko Po internetach chodziło; Hejtu nie
                  widziało! Na szacunek się napatrzyło! Na tik toku były tylko
                  mądrości, Vaneska z Nikolą uczyły życzliowści. Zero głupich
                  komentarzy, wyglądu krytki, Zrozumieniem drugiego mieorzone
                  wyniki. Bo tak juz przecież jest ułożona planeta, - Tam gdzie
                  pada słonko, to nie ma darkenta :)
                </p>
                <p className="text-[26px] md:text-[35px] min-[600px]:text-[30px] font-[600] font-oswald mt-[10%]">
                  Czesław
                </p>
                <p className="text-[18px] min-[425px]:text-[20px] md:text-[25px]  font-[400] font-oswald">
                  Ludzi widziało w blasku roztańczonych, wesołych - choć nie da
                  się ukryć pracą wymęczonych, Dziwiło się bardzo, skąd w nich
                  tyle mocy, - Ja tak na nich działam! rzekło w stronę nocy, -
                  To radio ktoś włączył - księżyc stwierdził właśnie, Jak
                  "Czwórki" słuchają siła w nich nie gaśnie:)
                </p>
                <p className="text-[26px] md:text-[35px] min-[600px]:text-[30px] font-[600] font-oswald mt-[10%]">
                  Natalia
                </p>
                <p className="text-[18px] min-[425px]:text-[20px] md:text-[25px]  font-[400] font-oswald">
                  Myślę, że kubek z kawą, bo większość z nas od tego rozpoczyna
                  dzień 😁
                </p>
                <p className="text-[26px] md:text-[35px] min-[600px]:text-[30px] font-[600] font-oswald mt-[10%]">
                  Hania
                </p>
                <p className="text-[18px] min-[425px]:text-[20px] md:text-[25px]  font-[400] font-oswald">
                  Słonko, gdy zajrzało przez szybę do mojego studenckiego
                  mieszkania, widziało, że brakuje w nim radia!
                </p>
                <p className="text-[26px] md:text-[35px] min-[600px]:text-[30px] font-[600] font-oswald mt-[10%]">
                  asia
                </p>
                <p className="text-[18px] min-[425px]:text-[20px] md:text-[25px]  font-[400] font-oswald mb-8">
                  Men​dela gdańskiego cnoty, Pimpusia Sadełko psoty, Koszałka
                  Opałkę starego, Ojca z Naszej Szkapy biednego, Janka
                  Wędrowniczka przygody, dobry sposób na jagody, z Marcysia
                  fabryki dym I do Roty każdy rym!
                </p>
              </div>
            </div>
          </SideBorderBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-1/2 z-0 aspect-[249/138] md:w-2/3 md:h-1/5">
        <Image src="/images/bottomLeftYellowDots.png" layout="fill" />
      </div>
    </section>
  );
}
