import { gql } from './graphql'

export const MyNestedQueryDoc = gql(/* GraphQL */ `
  query MyNestedQuery($page: Int!) {
    characters(page: $page) {
      info {
      } # error on this line
      results {
        name
      }
    }
  }
`)
