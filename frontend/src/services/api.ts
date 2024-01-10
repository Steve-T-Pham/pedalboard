import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:3000/equipment'

type Equipment = {
    id: number
    name: string
    type: string
    description?: string
    picture_url?: string
    brand?: string
    model?: string
}

const getAllEquipment = async (): Promise<AxiosResponse<Equipment[]>> => {
    try {
        const response = await axios.get(BASE_URL)
        return response
    } catch (err) {
        console.log(err)
        throw err
    }
}

const getItem = async (id: number): Promise<AxiosResponse<Equipment>> => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`) 
        return response
    } catch (err) {
        console.log(err)
        throw err
    }
}

const getAllGuitars = async (): Promise<Equipment[]> => {
    try {
        const response: AxiosResponse<Equipment[]> = await axios.get(`${BASE_URL}/type/guitar`)
        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

const createEquipment = async (newEquipment: Equipment): Promise<Equipment> => {
    try {
        const response: AxiosResponse<Equipment> = await axios.post(BASE_URL, newEquipment)
        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

const deleteEquipment = async (id: number): Promise<Equipment> => {
    try {
        const response: AxiosResponse<Equipment> = await axios.delete(`${BASE_URL}/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default { getAllEquipment, getAllGuitars, createEquipment, deleteEquipment, getItem }