import { useQuery } from "@tanstack/react-query"
import { getInfo } from "../actions/getInfo"
import { EInfoRoutes } from "@/enums/infoRoutes"

export const useGetInfo = (route: EInfoRoutes, endpoint: string) => {
	return useQuery({
		queryKey: ["getMovies", route, endpoint],
		queryFn: () => getInfo(route, endpoint)
	})
}
