import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { getInfo } from "@/utils/actions/getInfo"

const PersonListPage = async () => {
	const peopleList = await getInfo(EInfoRoutes.PERSON, EMoviesEndpoints.POPULAR)

	return <div>PersonListPage</div>
}

export default PersonListPage
