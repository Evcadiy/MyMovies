import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { getInfo } from "@/utils/actions/getInfo"
import { TPerson } from "./types"

const PersonalKnownForList = async ({ id }: { id: number }) => {
	const peopleList = await getInfo(EInfoRoutes.PERSON, EMoviesEndpoints.POPULAR)
	const people = peopleList.results

	const person: TPerson = people.find((person: TPerson) => person.id === id)

	return <div>{person?.name}</div>
}

export default PersonalKnownForList
