import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import loginPic from '../../../assets/images/auth_illustration.png'
import { useAuth } from '../../../hooks/useAuth'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>() // Define FormData type here

  const submitForm = async (formData: FormData) => {
    // Specify FormData type for formData
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/login`,
        formData
      )

      if (response.status === 200) {
        const { token } = response.data
        if (token) {
          const authToken = token
          localStorage.setItem('token', authToken)

          console.log(`Login time auth token: ${authToken}`)
          setAuth({ authToken })

          navigate('/')
          toast.success('Login successful!', { position: 'top-right' }) // Use correct position property
        }
      }
    } catch (error) {
      console.error(error)
      setError('root.random', {
        type: 'random',
        message: `User with email ${formData.email} is not found`,
      })
    }
  }

  return (
    <>
      <main className="flex min-h-screen items-center justify-center py-8">
        <div className="max-w-[1368px] flex-1">
          <div className="container grid items-center gap-8 lg:grid-cols-2">
            {/* <!-- illustration and title --> */}
            <div>
              <img
                className="mb-12 max-w-full max-lg:hidden"
                src={loginPic}
                alt="auth_illustration"
              />
              <div>
                <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                  Facehook
                </h1>
                <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                  Create a social media app with features like, showing the
                  post, post details, reactions, comments and profile.
                </p>
              </div>
            </div>
            {/* <!-- illustration and title ends --> */}
            {/* <!-- login form --> */}
            <div className="card">
              <form
                onSubmit={handleSubmit(submitForm)}
                className="shadow-xl p-5 rounded-lg mt-8"
              >
                {/* Input field for title */}
                <div className="flex flex-col mb-3">
                  <label className="mb-1">Email</label>
                  <input
                    {...register('email', { required: true })}
                    type="text"
                    className="border border-gray-400 rounded-md px-3 py-2"
                  ></input>
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1">Password</label>
                  <input
                    type="password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Your password must be at least 8 characters',
                      },
                    })}
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

              <div className="py-4 lg:py-6">
                <p className="text-center">
                  Dont have an account?
                  <Link
                    to="/register"
                    className="text-indigo-600 hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
            {/* <!-- login form ends --> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
