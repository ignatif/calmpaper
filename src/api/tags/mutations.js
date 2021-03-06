import gql from 'graphql-tag'

export const createTagMutation = gql`
  mutation($label: String!) {
    createOneTag(data: { label: $label }) {
      id
      label
    }
  }
`
