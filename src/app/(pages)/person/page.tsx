import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { getInfo } from "@/utils/actions/getInfo"

const PersonListPage = async ({
	searchParams
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) => {
	const page = searchParams["page"] ?? 1
	const peopleList = await getInfo(
		EInfoRoutes.PERSON,
		EMoviesEndpoints.POPULAR,
		page
	)

	const people = peopleList.results

	return <div>PersonListPage</div>
}

export default PersonListPage
