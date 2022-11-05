import { gql } from 'graphql-tag';

const userTypes = gql`
  type User {
    id: ID
    first_name: String
    last_name: String
    email: String
  }

  type Query {
    currentUser: User
  }

  type Mutation {
    logout: Boolean
  }
`;

export default userTypes;