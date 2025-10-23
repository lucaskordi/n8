import Image from "next/image";

export function TagLayer({ title }: { title: string }) {
  return (
    <>
      <div className="absolute top-4 lg:top-[110px] left-6 lg:left-[80px]  border-[1px] border-[#E6E5EA] w-[86px] h-[20px] rounded-[20px] text-[#171715] font-mirante text-xs font-normal leading-relaxed items-center justify-center flex text-center gap-[4px]">
        <div className="w-[10px] h-[10px] rounded-full bg-[#C2816B]" />
        <p className="mt-[1px] uppercase">{title}</p>
      </div>
      <Image
        src="/vector.png"
        width={550}
        height={150}
        alt="Vector"
        className="absolute top-5 lg:top-[70px] left-8 lg:left-[70px]"
      />
    </>
  );
}
