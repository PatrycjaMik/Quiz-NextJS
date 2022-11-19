import Image from "next/image";

export default function QuizStart() {
  return (
    <section className='relative bg-black aspect-[320/867] h-full'>

        <div className="absolute absolute top-0 right-0 w-10/12 h-1/5">
        <Image src="/images/topRightYellowDots.png" layout="fill" />
        </div>

        <div className= 'pt-28'>
            <div>
                <p className='text-center text-3xl font-bold font-oswald text-primary font-[600] uppercase'>Co wiesz o Marii Konopnickiej?</p>
            </div>


        </div>
     
    </section>
  
  );
}
