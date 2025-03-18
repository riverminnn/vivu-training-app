import { useForm, SubmitHandler } from 'react-hook-form';
import { createCategory } from '../../../api/category.service';
type Inputs = {
    name: string
}

type CategoryFormProps = {
    onGetCategories: () => void
}

const CategoryForm = ({ onGetCategories }: CategoryFormProps) => {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const submitForm: SubmitHandler<Inputs> = async (data) => {
        const { name } = data;
        const newCategory = {
            name: name,
            description: name,
        }
        await createCategory(newCategory);
        onGetCategories()
    }

    return <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Add Category</h1>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
                <label htmlFor="input-name" className="sr-only">Category Name</label>
                <div className="relative">
                    <input id="input-name" {...register("name", { required: true })} type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs" placeholder="Nhập vào tên danh mục" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer">
                    Add
                </button>
            </div>
        </form>
    </div>
}

export default CategoryForm
