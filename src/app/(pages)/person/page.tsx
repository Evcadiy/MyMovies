import PaginationControls from "@/components/MoviesComp/PaginationControls"
import PersonList from "@/components/PersonListPageComp/PersonList"
import { TPersonList } from "@/components/PersonListPageComp/types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { ERoutes } from "@/enums/routesEn"
import { getInfo } from "@/utils/actions/getInfo"
import { Suspense } from "react"

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
			<Suspense fallback={<div>Loading...</div>}>
				<PaginationControls totalPages={totalPages} route={ERoutes.PERSON} />
			</Suspense>
		</>
	)
}

export default PersonListPage
