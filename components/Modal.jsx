import Image from "next/image";
import Link from "next/link";
export default function Modal({ isOpen, isClosed }) {
  return (
    <>
      {isOpen && (
        <div className=" text-[#1C1F20] fixed inset-0 flex items-center justify-center gap-3 z-10">
          <div className=" bg-white h-[593px] w-60 rounded-md shadow-lg">
            <button onClick={isClosed} className=" text-[18px]">
              X
            </button>
          </div>
          <div className=" flex flex-col h-[593px] bg-white rounded-md shadow-lg">
            <button className=" bg-gradient-to-r from-[#F5A483] via-[#E574A5] to-[#354E78] p-[1px] rounded-md overflow-hidden mt-5 mb-7 mx-auto">
              <div className=" bg-white h-full w-full text-[18px] text-[#2F8BB2] font-semibold py-[8px] px-[18px] rounded-md overflow-hidden">
                Connect wallet
              </div>
            </button>
            <div className=" bg-gradient-to-r from-[#F5A483] via-[#E574A5] to-[#354E78] p-[0.5px] w-[210px] mb-3"></div>
            <div className=" flex flex-col flex-grow text-center">
              <div>
                <h2 className=" text-lg font-semibold">Briks and blocks</h2>
                <span className=" text-[14px] opacity-50">#12345678</span>
              </div>
              <div className=" bg-[#EFEFEF] w-[134px] place-self-center rounded-md flex flex-col gap-3 pb-2 mt-4">
                <Image src="/../public/Rectangle 154.png" width={134} height={116} />
                <span className=" text-[12px] font-semibold opacity-50">001/100</span>
              </div>
              <div className=" flex grow justify-center pb-4">
                <Link href="#" className=" self-end uppercase opacity-50">
                  faq
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
