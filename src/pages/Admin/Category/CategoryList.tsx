import { useEffect, useState } from "react";
import { ICategory } from "../../../Interfaces";
import { getCategory } from "../../../api/category.service";
import CategoryItem from "./CategoryItem";
import CategoryForm from "./CategoryForm";

const CategoryList = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    const getCategories = async () => {
        const data = await getCategory();
        setCategories(data);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className="card bg-white shadow-md rounded-md p-4">
            <div className="card-header p-4">
                <span className="text-2xl font-bold">Category Management</span>
                <CategoryForm onGetCategories={getCategories} />
            </div>
            <div className="card-body p-4 border-y border-gray-200">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className="text-left *:border *:border-gray-200 *:p-2">
                            <th className="border">No</th>
                            <th className="border">Name</th>
                            <th className="border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat) => <CategoryItem onGetCategories={getCategories} category={cat} key={cat.id} />)}
                    </tbody>
                </table>
            </div>
            <div className="card-footer p-4">
                <span className="text-2xl font-bold">Pagination</span>
            </div>
        </div>
    )
}

export default CategoryList;
