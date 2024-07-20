import { useQuery } from "@tanstack/react-query"
import { getMovies } from "../actions/getMovies"

export const useGetMovies = (endpoint: string) => {
	return useQuery({
		queryKey: ["getMovies", endpoint],
		queryFn: () => getMovies(endpoint)
	})
}
