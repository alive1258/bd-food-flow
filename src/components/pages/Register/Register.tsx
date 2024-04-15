import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateRegisterUserMutation } from "../../../redux/features/userApi";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>();

  const [createRegisterUser] = useCreateRegisterUserMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createRegisterUser(data);
      if ("error" in res) {
        // Handle error
        console.error("Error during Register:", res.error);
      } else {
        // Handle success
        if (res?.data?.success) {
          toast.success("Register successful!");

          navigate("/login");
        } else {
          // Handle invalid response
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error during Register:", error);
    }
  };

  return (
    <div className="container w-3/4 mt-10 shadow-md p-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-3">
          <label className="mb-1">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1">Email</label>
          <input
            {...register("email", { required: true })}
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className="border border-gray-400 rounded-md px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
