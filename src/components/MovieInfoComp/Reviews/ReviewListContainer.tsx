"use client"

import { useState } from "react"
import { Flex, Button, Divider, Heading } from "@chakra-ui/react"
import { TReviewResult } from "../types"
import ReviewCard from "./ReviewCard"

const ReviewListContainer = ({ reviews }: { reviews: TReviewResult[] }) => {
	const [showAllReviews, setShowAllReviews] = useState(false)

	const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 1)

	return (
		<>
			{reviews.length > 0 && (
				<>
					<Flex direction={"column"} gap={2} w={"100%"}>
						<Flex direction={"column"} gap={2} w={"100%"}>
							<Heading as="h2" size={"md"}>
								Reviews {reviews.length}
							</Heading>
							<Flex direction={"column"} gap={4}>
								{displayedReviews.map(
									({ author, author_details, content, id, created_at }) => (
										<ReviewCard
											key={id}
											id={id}
											author={author}
											author_details={author_details}
											content={content}
											created_at={created_at}
										/>
									)
								)}
								{!showAllReviews && reviews.length > 1 && (
									<Button
										w={"135px"}
										mb={-3}
										onClick={() => setShowAllReviews(true)}
										bgColor={"inherit"}
										color={"#fff"}
										_hover={{ color: "gray" }}
										_active={{}}
									>
										Read All Reviews
									</Button>
								)}
								{showAllReviews && reviews.length > 1 && (
									<Button
										w={"120px"}
										mb={-3}
										onClick={() => setShowAllReviews(false)}
										bgColor={"inherit"}
										color={"#fff"}
										_hover={{ color: "gray" }}
										_active={{}}
									>
										Close Reviews
									</Button>
								)}
							</Flex>
						</Flex>
					</Flex>
					<Divider borderColor={"gray.600"} />
				</>
			)}
		</>
	)
}

export default ReviewListContainer
