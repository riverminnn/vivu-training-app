import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faEdit, faPlus, faRotateLeft, faSave, faSearch, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return (
        <section className="p-4 bg-[#f9f9f9] z-0 gap-4 flex flex-col">
            <div className="body-item flex flex-col bg-white rounded-2xl border border-gray-200">
                <span className="p-4 font-bold text-left">Role Management</span>
                <div className="item-content border-y border-gray-200 p-4 flex gap-4">
                    <div className="input flex flex-col gap-1 w-1/2">
                        <label className="text-gray-500" htmlFor="role-name-search">Name</label>
                        <input className="border rounded-lg p-1.5" type="text" placeholder="Enter role name to search" id="role-name-search" name="roleNameSearch" />
                    </div>
                    <div className="input flex flex-col gap-1">
                        <span className="text-gray-500">Status</span>
                        <div className="checkbox-container gap-4 flex items-center flex-grow">
                            <input className="size-6 text-black" type="checkbox" id="status-search" name="status" />
                            <label className="text-gray-500" htmlFor="status-search">Active</label>
                        </div>
                    </div>
                </div>
                <div className="item-footer p-3 ">
                    <button className="float-left rounded-md p-2 text-white bg-blue-500 hover:bg-blue-700  cursor-pointer" type="button">
                        <FontAwesomeIcon className="mr-1" icon={faPlus} />
                        Create
                    </button>
                    <button className="mx-1 float-right rounded-md p-2 text-white bg-blue-500 hover:bg-blue-700  cursor-pointer" type="button">
                        <FontAwesomeIcon className="mr-1" icon={faSearch} />
                        Search
                    </button>
                    <button className="mx-1 float-right rounded-md p-2  bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer" type="button">
                        <FontAwesomeIcon className="mr-1" icon={faRotateLeft} />
                        Clear
                    </button>
                </div>
            </div>
            <div className="body-item flex flex-col bg-white rounded-2xl border border-gray-200">
                <span className="p-4 font-bold text-left">Role List</span>
                <div className="item-content border-y border-gray-200">
                    <table className="border-collapse w-full">
                        <thead>
                            <tr className="*:text-left *:pt-1.5 *:px-4 border-gray-200 border-y-1">
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="odd:bg-red-900">
                            <tr className="*:text-left *:py-1.5 *:px-4 odd:bg-gray-200">
                                <td>Admin</td>
                                <td>Full Access</td>
                                <td>Yes</td>
                                <td>
                                    <div className="action flex gap-2">
                                        <button className="text-blue-500  cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faEdit} /></button>
                                        <button className="text-red-500  cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="*:text-left *:py-1.5 *:px-4 odd:bg-gray-200">
                                <td>Editor</td>
                                <td>Editable</td>
                                <td>Yes</td>
                                <td>
                                    <div className="action flex gap-2">
                                        <button className="text-blue-500  cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faEdit} /></button>
                                        <button className="text-red-500  cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="*:text-left *:py-1.5 *:px-4 odd:bg-gray-200">
                                <td>User</td>
                                <td>Customer</td>
                                <td>Yes</td>
                                <td>
                                    <div className="action flex gap-2">
                                        <button className="text-blue-500  cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faEdit} /></button>
                                        <button className="text-red-500  cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="item-footer p-3 w-full flex items-center">
                    <div className="dropdown">
                        <label htmlFor="page" className="">Items per page:</label>
                        <select title="page" name="page" id="page" className="">
                            <option value="" defaultValue={10}>10</option>
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                        </select>
                    </div>
                    <div className="flex gap-2 w-4/5 items-center justify-center">
                        <button className="size-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faAnglesLeft} /></button>
                        <button className="size-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faAngleLeft} /></button>
                        <button className="size-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" type="button" title="edit">1</button>
                        <button className="size-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" type="button" title="edit">2</button>
                        <button className="size-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" type="button" title="edit">3</button>
                        <button className="size-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faAngleRight} /></button>
                        <button className="size-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer" type="button" title="edit"><FontAwesomeIcon icon={faAnglesRight} /></button>
                    </div>
                    <span className="flex-grow text-right"> 1-10 of 32</span>
                </div>
            </div>
            <div className="body-item flex flex-col bg-white rounded-2xl border border-gray-200">
                <span className="p-4 font-bold text-left">Add Role</span>
                <div className="item-content border-y border-gray-200 p-4 grid grid-cols-2 gap-4">
                    <div className="input flex flex-col gap-1">
                        <label className="text-gray-500" htmlFor="role-name">Name</label>
                        <input className="border rounded-lg p-1.5" type="text" placeholder="Enter role name" id="role-name" name="roleName" />
                    </div>
                    <div className="input flex flex-col gap-1">
                        <label className="text-gray-500" htmlFor="email">Description</label>
                        <textarea autoComplete="on" className="border rounded-lg p-1.5" placeholder="Enter your email" id="email" name="email" />
                    </div>
                    <div className="input flex flex-col gap-1">
                        <span className="text-gray-500">Status</span>
                        <div className="checkbox-container gap-4 flex items-center flex-grow">
                            <input className="size-6 text-black" type="checkbox" id="status" name="status" />
                            <label className="text-gray-500" htmlFor="status">Active</label>
                        </div>
                    </div>
                </div>
                <div className="item-footer p-3 ">
                    <button className="mx-1 float-right rounded-md p-2 text-white bg-blue-500 hover:bg-blue-700  cursor-pointer" type="button">
                        <FontAwesomeIcon className="mr-1" icon={faSave} />
                        Save
                    </button>
                    <button className="mx-1 float-right rounded-md p-2  bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer" type="button">
                        <FontAwesomeIcon className="mr-1" icon={faSearch} />
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
