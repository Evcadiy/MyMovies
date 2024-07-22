import { useQuery } from "@tanstack/react-query"
import { getMoviesInfoById } from "../actions/getMoviesInfoById"

export const useGetMoviesInfoById = (id: number, endpoint?: string) => {
	return useQuery({
		queryKey: endpoint
			? ["getMoviesInfoById", id, endpoint]
			: ["getMoviesInfoById", id],
		queryFn: () => getMoviesInfoById(id, endpoint)
	})
}
