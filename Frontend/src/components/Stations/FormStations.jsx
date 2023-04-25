import { useForm } from "react-hook-form"

export default function CreateStation({ createStation }) {

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <form   onSubmit={handleSubmit(createStation)}>
            <div  >
                <div  >
                    <label  >
                        Name
                    </label>
                </div>
                <div  >
                    <input {...register("name", { required: true })}   />
                </div>
            </div>
            <div  >
                <div  >
                    <label  >
                        Img
                    </label>
                </div>
                <div  >
                    <input {...register("img", { required: false })}   />
                </div>
            </div>
            <div  >
                <div  ></div>
                <div  >
                    <button  >
                        Create Station
                    </button>
                </div>
            </div>
        </form>
    )
}