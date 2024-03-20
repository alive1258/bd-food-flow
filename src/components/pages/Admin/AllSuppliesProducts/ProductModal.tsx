import { useForm } from 'react-hook-form'
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from '../../../../redux/features/productApi'

type Inputs = {
  title: string
  category: string
  quantity: number
}

const ProductModal = ({
  onClose,
  productId,
}: {
  onClose: () => void
  productId: string | null
}) => {
  const { data, isLoading, error } = useGetSingleProductQuery(productId)
  const [updateProduct] = useUpdateProductMutation()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit = async (data: Inputs) => {
    const modifiedData = {
      ...data,
      quantity: parseInt(data.quantity), // Assuming quantity is always a number
    }

    try {
      await updateProduct({ id: productId || '', body: modifiedData }) // Ensure productId is always defined
      onClose() // Close modal after successful update
    } catch (error) {
      console.error('Error updating product:', error)
      // Handle error if needed
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <div role="dialog" aria-modal="true">
        <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
          <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg pl-2 text-slate-400 my-2">
                Update Product
              </h3>
              <button onClick={onClose} className="text-white">
                Close
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-xl p-5 rounded-lg"
            >
              {/* Input fields for the form */}
              <div className="flex flex-col mb-3">
                <label className="mb-1">Title</label>
                <input
                  defaultValue={data?.title || ''}
                  {...register('title', { required: true })}
                  type="text"
                  className="border border-gray-400 rounded-md px-3 py-2"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label className="mb-1">Category</label>
                <input
                  defaultValue={data?.category || ''}
                  {...register('category', { required: true })}
                  type="text"
                  className="border border-gray-400 rounded-md px-3 py-2"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label className="mb-1">Quantity</label>
                <input
                  defaultValue={data?.quantity || ''}
                  {...register('quantity', { required: true })}
                  type="text"
                  className="border border-gray-400 rounded-md px-3 py-2"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductModal
