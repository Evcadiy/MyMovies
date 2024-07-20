import { useQuery } from "@tanstack/react-query"
import { getMoviesInfoById } from "../actions/getMoviesInfoById"

export const useGetMoviesInfoById = (endpoint: string, id: number) => {
	return useQuery({
		queryKey: ["getMoviesInfoById", endpoint, id],
		queryFn: () => getMoviesInfoById(endpoint, id)
	})
}
