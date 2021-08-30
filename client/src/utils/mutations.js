import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!
    $password: String!
    ) {
    login(
      email: $email
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($newBook: inputBook!) {
    saveBook(newBook: $newBook) {
      authors
      description
      title
      bookId
      image
      link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      authors
      description
      title
      bookId
      image
      link
      }
    }
  }
`;
