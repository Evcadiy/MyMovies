import ErrorSearch from "@/components/UI/Header/ErrorSearch"
import PaginationControls from "@/components/MoviesComp/PaginationControls"
import PersonList from "@/components/PersonListPageComp/PersonList"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { ERoutes } from "@/enums/routesEn"
import { getInfo } from "@/utils/actions/getInfo"
import { getInfoBySearch } from "@/utils/actions/getInfoBySeacrh"

const PersonListPage = async ({
	searchParams
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) => {
	const page = searchParams["page"] ?? 1
	const query = (searchParams["query"] ?? "").toString()

	const peopleList = query
		? await getInfoBySearch(EInfoRoutes.PERSON, query, page)
		: await getInfo(EInfoRoutes.PERSON, EMoviesEndpoints.POPULAR, page)

	const people = peopleList.results
	const totalPages = peopleList.total_pages

	return (
		<>
			{people.length === 0 ? (
				<ErrorSearch route={ERoutes.PERSON} title={"people"} />
			) : (
				<>
					<PersonList people={people} />
					<PaginationControls totalPages={totalPages} route={ERoutes.PERSON} />
				</>
			)}
		</>
	)
}

export default PersonListPage
