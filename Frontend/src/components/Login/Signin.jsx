import { useForm } from "react-hook-form";
import "./Signin.scss";
import { useAuth } from "../../hooks/useAuth";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, socialLogin } = useAuth();

  return (
//     <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//     <div className="mx-auto max-w-lg text-center">
//         <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
//         <p className="mt-4 text-gray-500">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
//             nulla eaque error neque ipsa culpa autem, at itaque nostrum!
//         </p>
//     </div>
//     <form onSubmit={handleSubmit(signin)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
//         <div>
//             <label htmlFor="email" className="sr-only">
//                 Email
//             </label>
//             <div className="relative">
//                 <input type="email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                     placeholder="Enter email" {...register("email", { required: true, pattern: { value:
//                     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "*Invalid format email" , }, })} />
//                 {errors.email && errors.email.type === "pattern" && (
//                 <span className="text-base text-danger">
//                     {errors.email.message}
//                 </span>
//                 )}
//                 {errors.email?.type === "required" && (
//                 <span className="text-base text-danger">{"*Email Required"}</span>
//                 )}
//                 <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none"
//                         viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                             d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                     </svg>
//                 </span>
//             </div>
//         </div>
//         <div>
//             <label htmlFor="password" className="sr-only">
//                 Password
//             </label>
//             <div className="relative">
//                 <input type="password" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                     placeholder="Enter password" {...register("password", { required: true, pattern: { value:
//                     /^[A-Z0-9._@%&+-]{4,}/i, message: "*More than 3 caracters" , }, })} />
//                 {errors.password && errors.password.type === "pattern" && (
//                 <span className="text-base text-danger">
//                     {errors.password.message}
//                 </span>
//                 )}
//                 {errors.password?.type === "required" && (
//                 <span className="text-base text-danger">
//                     {"*Password Required"}
//                 </span>
//                 )}
//                 <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none"
//                         viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                 </span>
//             </div>
//         </div>

//         <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-500">
//                 No account?
//                 <a className="underline" href="">
//                     Sign up
//                 </a>
//             </p>
//             <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium ">Sign in</button>
//         </div>
//         <div className="flex">
//             <button onClick={()=> socialLogin("google")}className="m-3 bg-gray-900 ">G</button>
//             <button onClick={()=> socialLogin("facebook")}className="m-3 bg-gray-900 ">F</button>
//             <button onClick={()=> socialLogin("twitter")}className="m-3 bg-gray-900 ">T</button>
//             <button onClick={()=> socialLogin("github")} className="m-3 bg-gray-900 ">Git</button>
//         </div>
//     </form>
// </div>
    <div className="login-box login">
        <div className="card log">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(signin)}>
                <div className="user-box">
                    <input type="text" name="" {...register("email", {
                        required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "*Invalid format email"
                        }
                    })} />
                    <label>Email</label>
                    {errors.email && errors.email.type === "pattern" && <span className="text-base text-danger">{errors.email.message}</span>}
                    {errors.email?.type === 'required' && <span className="text-base text-danger">{"*Email Required"}</span>}
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" {...register("password", {
                        required: true, pattern: {
                            value: /^[A-Z0-9._@%&+-]{4,}/i,
                            message: "*More than 3 caracters"
                        }
                    })} />
                    <label className="paco">Password</label>
                    {errors.password && errors.password.type === "pattern" && <span className="text-base text-danger">{errors.password.message}</span>}
                    {errors.password?.type === 'required' && <span className="text-base text-danger">{"*Password Required"}</span>}
                </div>
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    SignIn
                </button>
            </form>
            <div className="d-flex">
                <button onClick={() => socialLogin('google')} className="m-3 bg-gray-900 ">G</button>
                <button  onClick={() => socialLogin('facebook')} className="m-3 bg-gray-900 ">F</button>
                <button  onClick={() => socialLogin('twitter')} className="m-3 bg-gray-900 ">T</button>
                <button  onClick={() => socialLogin('github')} className="m-3 bg-gray-900 ">Git</button>
            </div>

        </div>
    </div>
  );
}
