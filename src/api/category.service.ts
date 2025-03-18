import instance from "./api.service";
import { ICategory } from "../Interfaces";

export const getCategory = async (): Promise<ICategory[]> => {
  return instance.get("categories")
}

export const getCategoryById = async (id: number): Promise<ICategory> => {
  return instance.get("categories" + `/${id}`)
}

export const createCategory = async (data: ICategory) => {
  return instance.post("categories", data)
}

export const deleteCategory = async (id: number) => {
  return instance.delete("categories" + `/${id}`)
}

export const updateCategory = async (id: number, data: ICategory) => {
  return instance.put("categories/" + id, data)
}


