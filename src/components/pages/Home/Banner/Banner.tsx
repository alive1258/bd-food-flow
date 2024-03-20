import './Banner.css'

const Banner = () => {
  return (
    <>
      <div className="bgBanner mt-20 md:h-[85vh] h-[45vh]">
        <div className="h-full ">
          <div className="container pt-48  ">
            <div className="md:text-5xl text-white md:space-y-5 text-lg  pl-12 font-bold">
              <div className="w-3/4 ">
                {' '}
                <h1 className="text-white">
                  {' '}
                  Experience the difference with our handpicked assortment of
                  natural, organic, and specialty products at{' '}
                </h1>
                <h1 className="p-3 mt-2 bg-[#934b00] opacity-80 w-[596px]">
                  {' '}
                  Food<span className="text-[#023e8a]"> Flow</span> Distributor.
                </h1>
              </div>
            </div>
            <div className="md:text-2xl text-lg md:space-x-4 md:pt-5 pl-12 font-bold">
              {' '}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
