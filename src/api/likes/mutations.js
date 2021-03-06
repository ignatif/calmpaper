import gql from 'graphql-tag'
import {
  UserFragment,
  BookFragment,
  ChapterFragment,
  GenreFragment,
  ReviewFragment,
} from '../fragments'

export const setLikeMutation = gql`
  mutation($authorId: Int!, $commentId: Int!) {
    setCommentLike(authorId: $authorId, commentId: $commentId) {
      id
      comment {
        id
        body
        author {
          ...User
        }
        book {
          ...Book
        }
        chapter {
          ...Chapter
          book {
            ...Book
          }
        }
        parent {
          id
          book {
            ...Book
          }
          chapter {
            ...Chapter
            book {
              ...Book
            }
          }
        }
      }
      author {
        ...User
      }
    }
  }
  ${UserFragment}
  ${BookFragment}
  ${ChapterFragment}
`

export const setChapterLike = gql`
  mutation($authorId: Int!, $chapterId: Int!) {
    setChapterLike(authorId: $authorId, chapterId: $chapterId) {
      id
      author {
        ...User
      }
      chapter {
        id
      }
    }
  }
  ${UserFragment}
`

// export const removeLikeMutation = gql`
//   mutation($likeId: Int!) {
//     removeLike(likeId: $likeId) {
//       id
//     }
//   }
// `

export const removeLikeMutation = gql`
  mutation($likeId: Int!) {
    deleteOneLike(where: { id: $likeId }) {
      id
      chapter {
        id
      }
    }
  }
`

export const setReviewLikeMutation = gql`
  mutation($authorId: Int!, $reviewId: Int!) {
    createOneLike(
      data: {
        author: { connect: { id: $authorId } }
        review: { connect: { id: $reviewId } }
      }
    ) {
      id
      review {
        ...Review
        likes {
          id
        }
        author {
          ...User
        }
      }
      author {
        ...User
      }
    }
  }
  ${UserFragment}
  ${ReviewFragment}
`

export const setChapterLikeMutation = gql`
  mutation($chapterId: Int!, $userId: Int!) {
    setChapterLikee(chapterId: $chapterId, userId: $userId) {
      ...Chapter
      createdAt
      content
      author {
        ...User
      }
      book {
        ...Book
        chapters {
          id
        }
        author {
          ...User
        }
        genres {
          ...Genre
        }
      }
      comments {
        id
      }
      likes {
        id
        author {
          id
        }
      }
    }
  }
  ${UserFragment}
  ${BookFragment}
  ${ChapterFragment}
  ${GenreFragment}
`

export const removeChapterLikeMutation = gql`
  mutation($chapterId: Int!, $likeId: Int!) {
    removeChapterLikee(chapterId: $chapterId, likeId: $likeId) {
      id
      author {
        id
      }
    }
  }
`
