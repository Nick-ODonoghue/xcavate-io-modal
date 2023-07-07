import Image from "next/image";
import Link from "next/link";

export default function Modal({ isOpen, isClosed }) {
  return (
    <>
      {isOpen && (
        <div className=" text-[#1C1F20] fixed inset-0 flex items-center justify-center gap-3 z-10">
          <div className=" flex flex-col items-center bg-white h-[593px] w-[680px] rounded-md shadow-lg">
            <button onClick={isClosed} className=" text-[18px] self-end mt-10 mr-10">
              X
            </button>
            <h2 className=" text-[28px] font-extrabold">Make Payment</h2>
            <div className=" flex gap-4 items-center mt-8">
              <button className=" text-lg border-[3px] border-slate-950 rounded-md flex items-center content-center px-[7px] font-bold">
                +
              </button>
              <span className=" text-[18px] opacity-70">1</span>
              <button className=" text-lg border-[3px] border-slate-950 rounded-md flex items-center content-center px-[7px] font-bold">
                -
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
                      className=" w-full border border-[#D9D9D9] rounded-sm py-[10px] pl-4 opacity-70 font-semibold"
                      value="2,000"
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
                    className=" border border-[#D9D9D9] rounded-sm bg-[#D9D9D9] pl-4 py-[10px]"
                    placeholder="4rbgzf7GuyBcq4mjJV6uYxXoBQrGLS...Q"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <label htmlFor="amount" className=" opacity-70">
                    <span className=" border border-blue-500 text-blue-500 px-[6px] mr-2">i</span>
                    Holding wallet address
                  </label>
                  <input
                    type="text"
                    name="amount"
                    className=" border border-[#D9D9D9] rounded-sm bg-[#D9D9D9] pl-4 py-[10px]"
                    placeholder="4rbgzf7GuyBcq4mjJV6uYxXoBQrGLS...Q"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <button className=" bg-gradient-to-r from-[#F5A483] via-[#E574A5] to-[#354E78] text-white font-bold mt-4 py-4 rounded-sm">
                    Make payment
                  </button>
                </div>
              </form>
            </div>
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
                <Image src="/holidayHome.png" width={134} height={116} alt="Holiday home" />
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
