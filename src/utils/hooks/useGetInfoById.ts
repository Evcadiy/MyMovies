import { useQuery } from "@tanstack/react-query"
import { getInfoById } from "../actions/getInfoById"
import { EInfoRoutes } from "@/enums/infoRoutes"

export const useGetInfoById = (
	route: EInfoRoutes,
	id: number,
	endpoint?: string
) => {
	return useQuery({
		queryKey: endpoint
			? ["getMoviesInfoById", route, id, endpoint]
			: ["getMoviesInfoById", route, id],
		queryFn: () => getInfoById(route, id, endpoint)
	})
}
