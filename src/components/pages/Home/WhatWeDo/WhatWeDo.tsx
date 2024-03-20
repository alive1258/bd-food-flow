import Marquee from 'react-fast-marquee'
// import { FaAmbulance } from 'react-icons/fa'
import { FaCarSide } from 'react-icons/fa'
import {
  FaBuildingCircleCheck,
  FaPeopleGroup,
  FaUserDoctor,
} from 'react-icons/fa6'
import { GiPirateCannon } from 'react-icons/gi'
import { MdPriceCheck } from 'react-icons/md'
import food1 from '../../../../assets/images/food2.jpeg'
import food2 from '../../../../assets/images/food4.jpeg'
import food3 from '../../../../assets/images/food4.png'
// import food3 from '../../../../assets/images/food4.jpeg'
// import food4 from '../../../../assets/images/food4.jpeg'
const WhatWeDo = () => {
  return (
    <>
      <div className="md:mt-[180px] mt-[100px]">
        <div className="text-center ">
          <h2>What We Do</h2>

          <p className="mt-3 text-[#566B84] font-normal md:text-[18px]">
            Celebrate culinary excellence with Our Products' seamless food flow,{' '}
            <br /> ensuring quality & Transform your dining experience with Food{' '}
            <br />
            Flow Distributor's unparalleled product range
          </p>
        </div>

        <div className="bg-[#e9ecef] mt-48">
          <div className="container">
            {/* Vision & Mission */}
            <div className="md:flex relative bottom-24">
              <div className=" bg-[#48cae4] text-[#ffffff] p-6 space-y-3">
                <h1 className="text-2xl font-semibold">Our Vision</h1>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                  pulvinar a. Vestibulum ac diam sit amet quam vehicula
                  elementum sed sit amet dui. Sed porttitor lectus nibh. Nulla
                  quis lorem ut libero malesuada feugiat. Sed porttitor lectus
                  nibh. Sed porttitor lectus nibh. Cras ultricies ligula sed
                  magna dictum porta.
                </p>
              </div>
              <div className="bg-[#0165ff] text-[#ffffff] p-6 space-y-3">
                <h1 className="text-2xl font-semibold">Our Mission</h1>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                  pulvinar a. Vestibulum ac diam sit amet quam vehicula
                  elementum sed sit amet dui. Sed porttitor lectus nibh. Nulla
                  quis lorem ut libero malesuada feugiat. Sed porttitor lectus
                  nibh. Sed porttitor lectus nibh. Cras ultricies ligula sed
                  magna dictum porta.
                </p>
              </div>
            </div>

            <div className="pb-20 ">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 space-y-4">
                <div className="space-y-6 h-[570px] overflow-y-scroll p-4">
                  {/* Food Service Distributors */}
                  <div className="flex space-x-6">
                    <div>
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          1
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6">
                      <div>
                        <GiPirateCannon size={40} className="text-[#0165ff]" />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Food Service Distributors
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Chain Supermarkets */}
                  <div className="flex space-x-6">
                    <div>
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          2
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6">
                      <div>
                        <FaUserDoctor size={40} className="text-[#0165ff]" />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Chain Supermarkets
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Independent Grocers*/}
                  <div className="flex space-x-6">
                    <div>
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          3
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6">
                      <div>
                        <FaBuildingCircleCheck
                          size={40}
                          className="text-[#0165ff]"
                        />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Independent Grocers
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Food Manufacturers & Processors*/}
                  <div className="flex space-x-6">
                    <div>
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          4
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6">
                      <div>
                        <FaPeopleGroup size={40} className="text-[#0165ff]" />
                      </div>
                      <h1 className="text-2xl font-semibold">
                        Food Manufacturers & Processors
                      </h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                  {/* Club Stores*/}
                  <div className="flex space-x-6">
                    <div>
                      <div className="bg-[#48cae4] -rotate-45 h-16 w-16 flex justify-center items-center rounded-es-3xl rounded-ss-3xl rounded-se-3xl">
                        <h1 className="rotate-45 text-white font-bold text-lg">
                          5
                        </h1>
                      </div>
                    </div>

                    <div className="shadow-xl rounded-lg p-6">
                      <div>
                        <MdPriceCheck size={40} className="text-[#0165ff]" />
                      </div>
                      <h1 className="text-2xl font-semibold">Club Stores</h1>
                      <p className="pt-3">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:pl-6 relative">
                  <div>
                    <div className="grid md:grid-rows-4 md:grid-flow-col gap-4">
                      <div className="row-span-4 ">
                        <img
                          className="h-full w-full rounded-lg"
                          src={food1}
                          alt=""
                        />
                      </div>
                      <div className="row-span-2  ">
                        <img
                          className="h-full w-full rounded-lg"
                          src={food2}
                          alt=""
                        />
                      </div>
                      <div className="row-span-2 ">
                        <img
                          className="h-full w-full rounded-lg"
                          src={food3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-36">
                    <div className="bg-white py-4 px-5 flex space-x-4">
                      <div>
                        <h1 className="text-xl font-semibold text-[#ef233c]">
                          24/7 Hours Service
                        </h1>
                        <p className="text-lg font-medium">99-885-665-2022</p>
                      </div>
                      {/* <FaAmbulance size={50} className="text-[#0165ff]" /> */}
                      <FaCarSide size={50} className="text-[#0165ff]" />
                    </div>
                  </div>
                  {/* marquery  */}
                  <div className="relative bottom-2">
                    <div className="text-2xl bg-[#48cae4] py-4 text-white">
                      <Marquee speed={30}>
                        The hospital's emergency services provide critical and
                        immediate medical care to individuals experiencing
                        sudden illness or injury. Staffed with skilled medical
                        professionals, these services offer swift assessment,
                        treatment, and stabilization to patients in urgent need,
                        ensuring timely and efficient care during emergencies.
                        Accessible 24/7, the emergency department is equipped to
                        handle a wide range of medical conditions, prioritizing
                        patient well-being and rapid intervention
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
