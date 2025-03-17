import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../../Interfaces";

const CategoryList = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const api = "http://localhost:5176/api/v1/categories";

    const fetchData = () => {
        axios.get(api)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const editItem = (id: string) => {
        console.log(id);
    }

    const deleteItem = (id: string) => {
        
        if (confirm("Are you sure you want to delete this item?")) {
            axios.delete(`http://localhost:5176/api/v1/categories/${id}`)
            .then(response => {
                console.log(response);
                fetchData();
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }
    }

    return (
        <div className="card bg-white shadow-md rounded-md p-4">
            <div className="card-header p-4">
                <span className="text-2xl font-bold">Category Management</span>
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
                        {categories.map((category, index) => (
                            <tr key={category.id} className="text-left *:border *:border-gray-200 *:p-2">
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td className="">
                                    <div className="flex gap-2">
                                        <button className="text-blue-500 cursor-pointer" type="button" onClick={() => editItem(category.id)}
                                            title="edit">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="text-red-500 cursor-pointer" type="button" onClick={() => deleteItem(category.id)}
                                            title="delete">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
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
