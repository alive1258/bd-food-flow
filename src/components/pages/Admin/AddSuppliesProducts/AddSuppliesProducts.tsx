import { useForm } from 'react-hook-form'
import { useCreateProductMutation } from '../../../../redux/features/productApi'

type Inputs = {
  title: string
  category: string
  quantity: number
}

const AddSuppliesProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const [createProduct] = useCreateProductMutation()

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const modifyData = {
      ...data,
      quantity: parseInt(data?.quantity),
    }
    createProduct(modifyData)

    reset()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-xl p-5 rounded-lg mt-8"
      >
        {/* Input field for title */}
        <div className="flex flex-col mb-3">
          <label className="mb-1">Title</label>
          <input
            {...register('title', { required: true })}
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2"
          ></input>
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1">Category</label>
          <input
            {...register('category', { required: true })}
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2"
          ></input>
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1">Quantity</label>
          <input
            {...register('quantity', { required: true })}
            type="number"
            className="border border-gray-400 rounded-md px-3 py-2"
          ></input>
        </div>

        {errors.exampleRequired && <span>This field is required</span>}
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default AddSuppliesProducts
