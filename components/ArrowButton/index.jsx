import Image from "next/image";

export const ArrowButton = () => {
return(
    
    <div className="w-[98px] h-[98px] absolute z-40 bg-black border-solid border-[4px] border-white rounded-full"> 
        <Image src="/images/arrowYellow.png" layout='fill' width='17px' height='32px' /> 
    </div>
   
)
}