import Image from "next/image";

export default function Prize() {
  return (
    <section className="relative bg-primary aspect-[320/867] h-full">
      <div className="absolute  top-0 right-0 w-10/12 h-1/5 ">
        <Image src="/images/topRightBlackDots.png" layout="fill" />
      </div>

      <div className="absolute  bottom-0 left-0 w-10/12 h-1/5 ">
        <Image src="/images/bottomLeftBlackDots.png" layout="fill" />
      </div>
    </section>
  );
}
