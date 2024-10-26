import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
export type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      toast.success("Welcome aboard!", {
        icon: "🎉",
        style: {
          backgroundColor: "white",
        },
        description:
          "Thanks for joining! We're excited to have you. Let's get started!",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
      // const clearNavigationTimeout = () => clearTimeout(timer);
      // clearNavigationTimeout();
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-3xl font-bold ">Create an Account</h1>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="py-0 text-sm font-bold text-gray-700 flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            type="text"
            {...register("firstName", {
              required: "Please enter your first name.",
            })}
          />
          {errors.firstName && (
            <span className="text-red-500 font-bold text-xs py-0">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="py-0 text-sm font-bold text-gray-700 flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            type="text"
            {...register("lastName", {
              required: "Please enter your last name.",
            })}
          />
          {errors.lastName && (
            <span className="text-red-500 font-bold text-xs py-0">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>
      <label className="py-0 text-sm font-bold text-gray-700 flex-1 ">
        Email
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="email"
          {...register("email", {
            required: "Please enter your email.",
          })}
        />
        {errors.email && (
          <span className="text-red-500 font-bold text-xs py-0">
            {errors.email.message}
          </span>
        )}
      </label>

      <label className="py-0 text-sm font-bold text-gray-700 flex-1">
        Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("password", {
            required: "Please enter your email.",
            minLength: {
              value: 6,
              message: "Password must be at least 4 characteres.",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 font-bold text-xs py-0">
            {errors.password.message}
          </span>
        )}
      </label>

      <label className="py-0 text-sm font-bold text-gray-700 flex-1">
        Confirm password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("confirmPassword", {
            required: "Please enter your email.",
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "The passwords don't match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 font-bold text-xs py-0">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>

      <span></span>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500"
      >
        Create account
      </button>
      <Toaster
        richColors
        toastOptions={{
          className: "my-toast",
        }}
        expand
        visibleToasts={1}
        position="top-center"
      />
    </form>
  );
};

export default Register;
