import { FaPeopleArrows } from 'react-icons/fa'
import { GiInspiration } from 'react-icons/gi'
import { GrCertificate } from 'react-icons/gr'

const Feature = () => {
  return (
    <>
      <div className="md:mt-[100px] mt-[100px] container">
        <div className="text-center ">
          <h2>Our Features</h2>

          <p className="mt-3 text-[#566B84] font-normal md:text-[18px]">
            The event features for clients include seamless registration,
            interactive sessions, <br /> and real-time engagement, ensuring a
            dynamic and enriching experience.
          </p>
        </div>

        {/* Grid layout for feature items */}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 ">
          <div className="cursor-pointer duration-500 transition-all ease-in-out delay-200 hover:scale-105">
            <div className="border-2  bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 flex justify-center items-center left-40 ">
              <GrCertificate size={50} className="-rotate-45  text-[#0B63E5]" />
            </div>

            <div className="border-2 h-60  px-4 bg-[#ffffff]  pt-16 pb-4 space-y-2 hover:bg-[#0B63E5] duration-500 ease-in-out hover:text-white">
              <h1 className="text-xl font-semibold text-center">
                Premium Quality
              </h1>
              <p className="text-lg">
                Superior products for discerning tastes.
              </p>
            </div>
          </div>

          <div className="cursor-pointer duration-500 transition-all ease-in-out delay-200 hover:scale-105 ">
            <div className="border-2  bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 flex justify-center items-center left-40">
              <FaPeopleArrows size={50} className="-rotate-45  text-[#000]" />
            </div>

            <div className="border-2 h-60  px-4 bg-[#ffffff]  pt-16 pb-4 space-y-2 hover:bg-[#000] duration-500 ease-in-out hover:text-white">
              <h1 className="text-xl font-semibold text-center">
                {' '}
                On-Time Delivery
              </h1>
              <p className="text-lg">
                Your orders, delivered when you need them.
              </p>
            </div>
          </div>

          <div className="cursor-pointer duration-500 transition-all ease-in-out delay-200 hover:scale-105">
            <div className="border-2 bg-[#ffffff] w-20 h-20 p-4 rotate-45 relative top-10 flex justify-center items-center left-40">
              <GiInspiration size={50} className="-rotate-45 text-[#38b000]" />
            </div>

            <div className="border-2 h-60  px-4 pt-16 pb-4 space-y-2 hover:bg-[#38b000] duration-500 ease-in-out hover:text-white">
              <h1 className="text-xl font-semibold text-center">
                Ongoing Support
              </h1>
              <p className="text-lg">Expert advice, whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
