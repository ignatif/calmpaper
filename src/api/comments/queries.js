import gql from 'graphql-tag'
import {
  UserFragment,
  BookFragment,
  ChapterFragment,
  // TagFragment,
  CommentFragment,
} from '../fragments'

export const getCommentsFeedQuery = gql`
  query($users: [Int!]) {
    comments(
      where: { author: { id: { in: $users } } }
      orderBy: { createdAt: desc }
    ) {
      ...Comment
      chapter {
        id
        title
      }
      book {
        id
        name
      }
    }
  }
  ${CommentFragment}
`

export const getCommentsByChapter = gql`
  query($chapterId: Int!) {
    commentsByChapter(chapterId: $chapterId) {
      ...Comment
      chapter {
        id
        title
        author {
          id
          username
        }
        book {
          id
          slug
          chapters {
            id
          }
        }
      }
      book {
        id
        name
      }
    }
  }
  ${CommentFragment}
`

export const getAllCommentsQuery = gql`
  query($first: Int) {
    comments(orderBy: { createdAt: desc }, first: $first) {
      ...Comment
      book {
        ...Book
        author {
          ...User
        }
      }
      chapter {
        ...Chapter
        author {
          ...User
        }
        book {
          ...Book
          chapters {
            id
          }
        }
      }
    }
    commentsCount
  }
  ${UserFragment}
  ${CommentFragment}
  ${BookFragment}
  ${ChapterFragment}
`
