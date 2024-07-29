"use client"

import { useState } from "react"
import { Flex, Text, Button, Divider } from "@chakra-ui/react"
import { TReviewResult } from "./types"
import ReviewCard from "./ReviewCard"

const ReviewListContainer = ({ reviews }: { reviews: TReviewResult[] }) => {
	const [showAllReviews, setShowAllReviews] = useState(false)

	const handleReadAllReviews = () => {
		setShowAllReviews(true)
	}

	const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 1)

	return (
		<>
			{reviews.length > 0 && (
				<>
					<Divider borderColor={"gray.600"} />
					<Flex direction={"column"} gap={2} w={"100%"} pt={5} pb={8}>
						<Text fontWeight={"500"} fontSize={"lg"}>
							Reviews {reviews.length}
						</Text>
						<Flex direction={"column"} gap={4}>
							{displayedReviews.map(
								({ author, author_details, content, id, created_at }) => (
									<ReviewCard
										key={id}
										author={author}
										author_details={author_details}
										content={content}
										created_at={created_at}
									/>
								)
							)}
							{!showAllReviews && reviews.length > 2 && (
								<Button
									justifyContent={"flex-start"}
									p={0}
									onClick={handleReadAllReviews}
									bgColor={"inherit"}
									color={"#fff"}
									_hover={{ color: "gray" }}
								>
									Read All Reviews
								</Button>
							)}
						</Flex>
					</Flex>
					<Divider borderColor={"gray.600"} />
				</>
			)}
		</>
	)
}

export default ReviewListContainer
