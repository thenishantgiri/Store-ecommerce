import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
    query GetReviews {
        reviews {
            createdAt
            headline
            id
            message
            name
            rating
        }
    } 
`;

export const CREATE_REVIEW = gql`
    mutation NewReview($name: String!, $headline: String!, $message: String!, $rating: Int!, $id: ID) {
        createReview(data: {name: $name, headline: $headline, message: $message, rating: $rating, product: {connect: {id: $id}}}) {
        name
        headline
        message
        rating
        product {
            id
        }
    }
}
`;