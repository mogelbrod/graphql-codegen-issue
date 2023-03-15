import { gql } from './graphql'

export const MyQueryDoc = gql(/* GraphQL */ `
  query MyQuery($page: Int!) {
    characters(page: $page) {
      results {
        name # uncomment this line to make the query valid
      }
    }
  }
`)
