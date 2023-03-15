import { gql } from './graphql'

export const MyQueryDoc = gql(/* GraphQL */ `
  query MyQuery($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`)
