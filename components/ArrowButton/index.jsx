import Image from "next/image";

export const ArrowButton = () => {
return(
    <div className="w-[98px] h-[98px] absolute bg-black border-4 border-white rounded-full"> 
        <Image src="/images/arrowYellow.png" layout='fill' width='32px' height='32px' /> 
    </div>
)
}