import Image from "next/image";
import Link from "next/link";

export default function Modal({ isOpen, isClosed }) {
  return (
    <>
      {isOpen && (
        <div className=" text-[#1C1F20] fixed inset-0 flex items-center justify-center gap-3 z-10">
          <div className=" flex flex-col items-center bg-white h-[593px] w-[680px] rounded-md shadow-lg">
            <button onClick={isClosed} className=" self-start mt-[40px] ml-[616px]">
              <Image src="/icons/close.png" width={18} height={18} alt="Close" />
            </button>
            <h2 className=" text-[28px] font-graphikBold tracking-wide leading-[30.8px]">Make Payment</h2>
            <div className=" flex gap-4 items-center mt-8">
              <button className=" flex items-center content-center px-[7px] font-bold">
                <Image src="/icons/add-square.png" width={27.5} height={27.5} alt="Plus" />
              </button>
              <span className=" text-[18px] opacity-70">1</span>
              <button className=" flex items-center content-center px-[7px] font-bold">
                <Image src="/icons/remove-square.png" width={27.5} height={27.5} alt="Plus" />
              </button>
            </div>
            <div className=" w-[447px] mt-2">
              <form className=" flex flex-col gap-4 text-[18px]">
                <div className=" flex flex-col gap-1">
                  <label htmlFor="amount" className=" opacity-70">
                    Amount
                  </label>
                  <div className=" flex">
                    <span className=" bg-[#D9D9D9] py-[10px] w-[52px] text-center rounded-l-sm">£</span>
                    <input
                      type="text"
                      name="amount"
                      className=" w-full border border-[#D9D9D9] rounded py-[10px] pl-4 font-graphikMedium text-[#1C1F20]"
                      placeholder="2,000"
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-1">
                  <label htmlFor="amount" className=" opacity-70">
                    Sender wallet address
                  </label>
                  <input
                    type="text"
                    name="amount"
                    className=" border border-[#D9D9D9] rounded bg-[#D9D9D9] pl-4 py-[10px]"
                    placeholder="4rbgzf7GuyBcq4mjJV6uYxXoBQrGLS...Q"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <div className=" flex gap-2">
                    <Image
                      src="/icons/info.svg"
                      width={15}
                      height={15}
                      alt="Info"
                      className=" object-contain opacity-[78%]"
                    />
                    <label htmlFor="amount" className=" opacity-70">
                      Holding wallet address
                    </label>
                  </div>
                  <input
                    type="text"
                    name="amount"
                    className=" border border-[#D9D9D9] rounded bg-[#D9D9D9] pl-4 py-[10px]"
                    placeholder="4rbgzf7GuyBcq4mjJV6uYxXoBQrGLS...Q"
                  />
                </div>
                <div className=" flex flex-col gap-1 mt-6">
                  <button className=" bg-gradient-to-r from-[#F5A483] via-[#E574A5] to-[#354E78] text-white font-graphikSemibold py-[14px] rounded">
                    Make payment
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" flex flex-col h-[593px] bg-white rounded-md shadow-lg">
            <button className=" bg-gradient-to-r from-[#F5A483] via-[#E574A5] to-[#354E78] p-[1px] rounded-md overflow-hidden mt-5 mb-7 mx-auto">
              <div className=" bg-white h-full w-full text-[18px] text-[#2F8BB2] font-graphikMedium py-2 px-[18px] rounded-md overflow-hidden">
                Connect wallet
              </div>
            </button>
            <div className=" bg-gradient-to-r from-[#F5A483] via-[#E574A5] to-[#354E78] p-[0.5px] w-[210px] mb-3"></div>
            <div className=" flex flex-col flex-grow text-center">
              <div>
                <h2 className=" text-lg font-graphikMedium tracking-wide">Briks and blocks</h2>
                <span className=" text-[14px] opacity-50">#12345678</span>
              </div>
              <div className=" bg-[#EFEFEF] w-[134px] place-self-center rounded-md flex flex-col gap-3 pb-2 mt-4">
                <Image src="/holidayHome.png" width={134} height={116} alt="Holiday home" />
                <span className=" text-[12px] font-graphikMedium opacity-50">001/100</span>
              </div>
              <div className=" flex grow justify-center pb-4">
                <Link href="#" className=" self-end uppercase opacity-50 tracking-wide">
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
