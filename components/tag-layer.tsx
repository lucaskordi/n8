import Image from "next/image";

export function TagLayer({
  title,
  hasN8Logo = false,
  children,
}: {
  title: string;
  hasN8Logo?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="absolute top-4 lg:top-[110px] left-4 lg:left-[80px] 2xl:left-[180px] 3xl:left-[270px] 4xl:left-[370px] border-[1px] border-[#E6E5EA] w-[86px] h-[20px] rounded-[20px] text-[#171715] font-mirante text-xs font-normal leading-relaxed items-center justify-center flex text-center gap-[4px]">
        <div className="w-[10px] h-[10px] rounded-full bg-[#C2816B]" />
        <p className="mt-[1px] uppercase">{title}</p>
      </div>
      <Image
        src="/vector.png"
        width={550}
        height={150}
        alt="Vector"
        className="absolute top-5 lg:top-[70px] left-6 lg:left-[70px] 2xl:left-[170px] 3xl:left-[260px] 4xl:left-[360px]"
      />
      {hasN8Logo && (
        <Image
          src="/logo_n8.png"
          alt="N8 Incorporadora"
          width={160}
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 object-contain lg:absolute lg:top-[130px] lg:left-[300px] 2xl:left-[390px]  3xl:left-[490px]  mb-10 lg:mb-0"
        />
      )}
      <div className="lg:absolute lg:top-[130px] lg:left-[520px] 2xl:left-[620px] 3xl:left-[720px] 4xl:left-[820px]">
        {children}
      </div>
    </>
  );
}
