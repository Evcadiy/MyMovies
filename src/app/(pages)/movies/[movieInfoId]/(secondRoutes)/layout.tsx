import ViewAllHeader from "@/components/MovieInfoComp/Media/ViewAllHeader"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { getInfoById } from "@/utils/actions/getInfoById"

export default async function SecondRoutesLayout({
	params: { movieInfoId },
	children
}: Readonly<{
	params: { movieInfoId: string }
	children: React.ReactNode
}>) {
	const movie = await getInfoById(EInfoRoutes.MOVIE, movieInfoId)

	return (
		<>
			<ViewAllHeader movie={movie} />
			{children}
		</>
	)
}
