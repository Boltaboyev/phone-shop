import {useQuery} from "@tanstack/react-query"
import {fetchPhones} from "../api"

export const useData = () => {
    return useQuery({
        queryKey: ["phone"],
        queryFn: fetchPhones,
    })
}
