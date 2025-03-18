import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICategory } from "../../../Interfaces";
import { getCategoryById, updateCategory } from "../../../api/category.service";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CategoryModalProps = {
    onClose: () => void,
    id: number,
}

type Inputs = {
    name: string,
    description: string
}

const CategoryModal = ({ onClose, id }: CategoryModalProps) => {
    const [category, setCategory] = useState<ICategory>()
    const { register, handleSubmit, reset } = useForm<Inputs>()

    const submitForm: SubmitHandler<Inputs> = async (data) => {
        await updateCategory(id, data)
        onClose()
    }

    const fetchCategoryById = useCallback(async () => {
        const data = await getCategoryById(id)
        setCategory(data)
    }, [id])

    useEffect(() => {
        fetchCategoryById()
    }, [fetchCategoryById])

    useEffect(() => {
        reset(category)
    }, [category, reset])

    return (
        <div className="modal w-full h-full absolute left-0 top-0 flex items-center justify-end z-50">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md sm:p-6 lg:p-8 w-1/4 " role="alert">
                <div className="flex items-center gap-4 justify-between">
                    <p className="font-medium sm:text-lg">Edit Modal</p>
                    <button type="button" title="close" className="size-8 rounded-2xl text-white cursor-pointer bg-red-500 hover:bg-red-800  flex justify-center items-center" onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <h1 className="text-xl">Update Category</h1>
                    <div>
                        <div className="relative">
                            <input {...register("name", { required: true })} type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs" placeholder="Enter name..."
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <input {...register("description", { required: true })} type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs" placeholder="Description..."
                            />
                        </div>
                    </div>
                    <div className="mt-6 sm:flex sm:gap-4">
                        <button type="submit" className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto
                    hover:bg-blue-700 cursor-pointer">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CategoryModal;
