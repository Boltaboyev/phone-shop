import axios from "axios"

export const fetchPhones = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL)
    return response.data
}
