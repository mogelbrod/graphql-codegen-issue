import { gql } from './graphql'

export const MyNestedQueryDoc = gql(/* GraphQL */ `
  query MyNestedQuery($page: Int!) {
    characters(page: $page) {
      info {
        # count # uncomment this line to make the query valid
      }
    }
  }
`)
