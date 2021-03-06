import gql from 'graphql-tag'

export const createChapterMutation = gql`
  mutation(
    $title: String!
    $content: String!
    $bookId: Int
    $bookSlug: String
    $userId: Int!
  ) {
    createChapter(
      title: $title
      content: $content
      userId: $userId
      bookId: $bookId
      bookSlug: $bookSlug
    ) {
      id
      title
      content
      book {
        id
        slug
        chapters {
          id
        }
      }
    }
  }
`

export const updateChapterMutation = gql`
  mutation($title: String!, $content: String!, $chapterId: Int!) {
    updateOneChapter(
      where: { id: $chapterId }
      data: { title: { set: $title }, content: { set: $content } }
    ) {
      id
      title
      content
      book {
        id
        slug
        chapters {
          id
        }
      }
    }
  }
`

export const incrementChapterViewsMutation = gql`
  mutation($chapterId: Int!) {
    incrementChapterViews(chapterId: $chapterId) {
      id
      slug
      title
      views
    }
  }
`

export const deleteChapterMutation = gql`
  mutation($id: Int!) {
    deleteOneChapter(where: { id: $id }) {
      id
    }
  }
`

export const voteMutation = gql`
  mutation($chapterId: Int!, $pollId: Int!, $option: VoteOption!) {
    vote(chapterId: $chapterId, pollId: $pollId, option: $option) {
      id
      option
    }
  }
`
