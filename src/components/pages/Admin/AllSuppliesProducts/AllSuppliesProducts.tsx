/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../../../../redux/features/productApi'
import ProductModal from './ProductModal'

const AllSuppliesProducts = () => {
  const [deleteProduct] = useDeleteProductMutation()
  const { data, error, isLoading } = useGetProductsQuery('')
  const [showModal, setShowModal] = useState(false)
  const [editProductId, setEditProductId] = useState(null)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className="md:mt-28  mt-9">
        <div className="md:flex justify-between items-center">
          <div className=" md:text-3xl text-2xl font-bold ">All Supplies</div>
          {/* Link to add new event item */}
          <div>
            <Link to="/dashboard/create-supply">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Add Supply
              </button>
            </Link>
          </div>
        </div>
        {/* Event items table */}
        <div className="pt-3">
          <table className="table-auto border-collapse border border-black w-full">
            <thead className="">
              <tr className="border border-black ">
                <th className="border border-black ">index</th>
                <th className="border border-black ">Title</th>
                <th className="border border-black ">Category</th>
                <th className="border border-black ">Quantity</th>

                <th className="border border-black">action</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each event item */}
              {data?.map((item: any, index: number) => (
                <tr key={item._id} className="border border-black">
                  <td className="border border-black text-center px-2">
                    {index + 1}
                  </td>
                  <td className="border border-black px-2">{item?.title}</td>
                  <td className="border text-center border-black p-2">
                    {item?.category}
                    {/* <img className="h-12 w-12" src={item?.image} alt="" /> */}
                  </td>
                  <td className="border text-center border-black p-2">
                    {item?.quantity}
                    {/* <img className="h-12 w-12" src={item?.image} alt="" /> */}
                  </td>
                  {/* Buttons for editing and deleting an event item */}
                  <td className="border border-black ">
                    <div className="flex justify-between items-center gap-2 p-1">
                      <span>
                        <button
                          onClick={() => {
                            // e.stopPropagation()
                            deleteProduct(item?._id)
                          }}
                        >
                          <MdDelete className="text-red-700 text-[20px]" />
                        </button>
                      </span>
                      <span>
                        {/* Button to edit an event item */}

                        {/* <Link  to={`/admin/edit-event-item/${item?._id}`}> */}
                        <button
                          onClick={() => {
                            // e.stopPropagation()
                            setEditProductId(item?._id)
                            handleShowModal(true)
                          }}
                        >
                          <FaEdit className="text-blue-700 text-[20px]" />
                        </button>
                        {/* </Link> */}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && (
        <ProductModal
          onClose={() => {
            setShowModal(false)
          }}
          productId={editProductId}
        />
      )}
    </>
  )
}

export default AllSuppliesProducts
