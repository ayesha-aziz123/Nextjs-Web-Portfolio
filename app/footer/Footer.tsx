import Image from "next/image"

const Footer = () => {
  return (
    <div className='pt-16 px-3 lg:px-4 pb-16 bg-[#0f0715]'>
        <div>
            <Image src={"/images/logo1.png"} width={100} height={100} alt={"logo"} className=""/>
        </div>

        <div className="flex justify-center px-2 text-[14px] lg:text-[18px] items-center flex-wrap space-x-10 space-y-4 text-white font-bold">
            <div>Home.</div>
            <div>Services.</div>
            <div>Projects.</div>
            <div>Review.</div>
            <div>Contact.</div>
        </div>
        <p className="text-white text-opacity-60 text-center mt-6 text-[13px] lg:text-[18px] ">© 2024 All Rights Reserved by WebDev Warriors</p>
    </div>
  )
}

export default Footer