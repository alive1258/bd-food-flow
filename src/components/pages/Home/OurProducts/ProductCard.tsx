import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <div className="bg-[#ffffff] shadow-xl rounded-lg">
        <img
          className="bg-gray-300 rounded-t-lg h-64"
          src={product?.image}
          alt=""
        />
        <div className="px-5 pt-10 pb-8">
          <h3 className="text-[#061C3D] text-xl font-bold">{product?.title}</h3>
          <div className="flex justify-between items-center pt-4 font-semibold">
            <h4 className="text-[#061C3D] text-lg "> {product?.category}</h4>
            <h4>Quantity : {product?.quantity}</h4>
          </div>

          <div className="flex  justify-center pt-5">
            <Link onClick={topFunction} to={`/products/${product?._id}`}>
              <button className="btn ">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
