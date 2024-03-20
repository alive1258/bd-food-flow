import { AiFillYoutube, AiTwotonePhone } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="bg-black mt-28">
        <div className=" text-white md:pb-2 pb-20 pt-14">
          <div className="container ">
            <div className="py-6">
              <div className="grid border-b md:grid-cols-2 grid-cols-1 gap-2  pb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Link to="/">
                      {/* <img className="h-16 " src={logo} alt="" /> */}
                      loho
                    </Link>

                    <div>
                      <h1 className="text-2xl text-[#09adfe] font-bold ">
                        {' '}
                        Global Academia
                      </h1>
                      <p className="text-yellow-400">Education Consultants</p>
                    </div>
                  </div>
                  <div className="pt-6 text-[16px] font-medium">
                    <p>
                      Explore the transformation power of education as we
                      provide insights,
                      <br /> resources, Visa, scholarships, and solutions to
                      learners of all students. <br /> A World of Education
                      Awaits You.
                    </p>

                    {/* -------email------  */}
                    <div className="flex gap-4 pt-10">
                      <p className="text-white">Follow us on:</p>

                      <div className="bg-gray-400 hover:bg-[#28589c] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <FaFacebookF className="" />
                      </div>
                      <div className="bg-gray-400 hover:bg-[#E1306c] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <BsInstagram />
                      </div>
                      <div className="bg-gray-400 hover:bg-[#ff0000] hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <AiFillYoutube />
                      </div>
                      <div className="bg-gray-400 hover:bg-blue-700 hover:scale-125 cursor-pointer duration-300 text-white h-8 w-8 rounded-full flex items-center justify-center">
                        <BiLogoLinkedin />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid md:grid-cols-3 grid-cols-1 md:pt-6 gap-4">
                    <div>
                      <p className="text-2xl font-bold pb-6 text-white">
                        Get To Know Us
                      </p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <div>
                          <Link onClick={topFunction} to="/">
                            Home
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/about">
                            About
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/services">
                            Services
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/study">
                            Study Abroad
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/scholarship">
                            Scholarship
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/contact">
                            Contact
                          </Link>
                        </div>
                        <div>
                          <Link onClick={topFunction} to="/tramsCondition">
                            Terms and Conditions
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 text-white">
                        Let Us Help You
                      </p>
                      <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                        <p>Get 100% Scholarship </p>
                        <p>World Ranking University</p>
                        <p>100% Visa Success</p>
                        <p>Get Your Course</p>
                        <p>Get Hostel Cost Free</p>
                        <p>Accommodation Fees Free</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold pb-6 text-white">
                        Contact Us
                      </p>
                      <div className="space-y-4">
                        {/* -------phone------  */}
                        <div className="flex items-center gap-2">
                          <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center"
                          >
                            <AiTwotonePhone className="" size={25} />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>+88 0179-3636735</p>
                          </div>
                        </div>

                        {/* -------location------  */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                            <GoLocation className="" size={25} />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>Ma Sufiya Mohol,</p>
                            <p>1st Floor,</p>
                            <p>Plastic Factory Road,</p>
                          </div>
                        </div>
                        {/* -------location------  */}
                        <div className="flex items-center gap-2">
                          <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                            <GoLocation className="" size={25} />
                          </div>
                          <div className="text-[16px] font-medium">
                            <p>Notun Vangabrai,</p>
                            <p>Sirajgnaj ,Bangladesh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-4 flex justify-center items-center flex-wrap">
                <div>
                  <p className="text-white">
                    © Copyright {currentYear}, All Rights Reserved by Global
                    Academia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
