import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ICategory } from "../../../Interfaces";
import { deleteCategory } from "../../../api/category.service";

type CategoryItemProps = {
    category: ICategory,
    onGetCategories: () => void,
    onUpdateCategory: () => void,
}

const CategoryItem = ({ category, onGetCategories, onUpdateCategory }: CategoryItemProps) => {
    const onDeleteCategory = async (id?: number) => {
        if (confirm('Are you sure you want to delete this category?')) {
            if (id) {
                await deleteCategory(id)
                onGetCategories()
            }
        }
    }
    return (
        <tr key={category.id} className="text-left *:border *:border-gray-200 *:p-2">
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td className="">
                <div className="flex gap-2">
                    <button className="text-blue-500 cursor-pointer" type="button" onClick={() => onUpdateCategory()}
                        title="edit">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-500 cursor-pointer" type="button" onClick={() => onDeleteCategory(category.id)}
                        title="delete">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default CategoryItem;
