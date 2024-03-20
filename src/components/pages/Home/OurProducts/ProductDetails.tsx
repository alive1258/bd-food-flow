import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../../../hooks/useAuth'
import { useGetSingleProductQuery } from '../../../../redux/features/productApi'
import DonateModal from './DonateModal'

const ProductDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetSingleProductQuery(id)
  const [showModal, setShowModal] = useState(false)
  const { auth } = useAuth()
  const navigate = useNavigate()

  const handleShowModal = () => {
    setShowModal(true)
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return <div>Product not found</div>
  }

  const handleProfileClick = () => {
    if (!auth) {
      toast.error('To donate, you must first log in.', {
        position: toast.TOP_RIGHT,
      })
      navigate('/login') // Redirect to the login page if not authenticated
    } else {
      handleShowModal() // Open modal only if the user is authenticated
    }
  }

  return (
    <>
      <div className="container mt-28">
        <div className="">
          <h2 className="text-center">{data?.title}</h2>
          <div className="flex justify-center items-center mt-5">
            <img className="w-3/4 " src={data?.image} alt="" />
          </div>
          <div className="w-3/4 mx-auto mt-4 flex justify-between text-xl font-bold">
            <p>Category: {data?.category}</p>
            <p>Quantity: {data?.quantity}</p>
          </div>
          <p className="mt-5 w-3/4 mx-auto text-lg text-center">
            <span className="text-xl font-bold">description : </span>
            {data?.description}
          </p>
          <div className="flex  justify-center pt-5">
            <button
              onClick={() => {
                handleProfileClick()
                handleShowModal(true)
              }}
              className="btn "
            >
              Donate Now{' '}
            </button>
          </div>
        </div>
        {/* Add more details as needed */}

        {showModal && (
          <DonateModal
            onClose={() => {
              setShowModal(false)
            }}
          />
        )}
      </div>
    </>
  )
}

export default ProductDetails
