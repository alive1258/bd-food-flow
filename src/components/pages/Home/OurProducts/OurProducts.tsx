import { useGetProductsQuery } from '../../../../redux/features/productApi'
import ProductCard from './ProductCard'

const OurProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery('')

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <div className="md:mt-[100px] mt-[100px] container">
        <div className="text-center ">
          <h2>Our Products</h2>

          <p className="mt-3 text-[#566B84] font-normal md:text-[18px]">
            Celebrate culinary excellence with Our Products' seamless food flow,{' '}
            <br /> ensuring quality & Transform your dining experience with Food{' '}
            <br />
            Flow Distributor's unparalleled product range
          </p>
        </div>

        {/* card  */}
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
          {data?.slice(0, 6).map(product => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        <div className="flex  justify-center pt-10">
          <button className="btn ">View All</button>
        </div>
      </div>
    </>
  )
}

export default OurProducts
