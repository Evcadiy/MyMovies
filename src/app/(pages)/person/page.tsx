import PaginationControls from "@/components/MoviesComp/PaginationControls"
import PersonList from "@/components/PersonListPageComp/PersonList"
import { TPersonList } from "@/components/PersonListPageComp/types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { ERoutes } from "@/enums/routesEn"
import { getInfo } from "@/utils/actions/getInfo"

const PersonListPage = async () => {
	const peopleList: TPersonList = await getInfo(
		EInfoRoutes.PERSON,
		EMoviesEndpoints.POPULAR
	)

	const people = peopleList.results
	const totalPages = peopleList.total_pages

	return (
		<>
			<PersonList people={people} />
			<PaginationControls totalPages={totalPages} route={ERoutes.PERSON} />
		</>
	)
}

export default PersonListPage
