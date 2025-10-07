import { request } from 'graphql-request';
import type { Mutation } from '../../../graphql/graphql';
import type { UserRole } from '../../../graphql/graphql';

const graphqlEndpoint = 'https://cv-project-js.inno.ws/api/graphql';

type SignUpQueryType = Pick<Mutation, 'signup'>

export const SIGN_UP = async (email: string, password: string): Promise<SignUpQueryType> => {
  const query = `
    mutation signUp($email: String!, $password: String!) {
    signup(auth: { email: $email, password: $password }) {
      user {
        id
      }
      access_token
    }
  }`
  const response = await request(graphqlEndpoint, query, {email, password});
  
  return response;

};

export const UPDATE_USER = async (userId: string, cvsIds: [string], departmentId: string, positionId: string, role: UserRole, accessToken?: string | null) => {
  const query = `
    mutation update($userId: ID!, $cvsIds: [String!], $departmentId: ID, $positionId: ID, $role: UserRole) {
    updateUser(user: { userId: $userId, cvsIds: $cvsIds }) {
      user {
        id
      }
    }
  }`
  const response = await request(graphqlEndpoint, query, {userId, cvsIds, departmentId, positionId, role}, [['Authorization', `Bearer ${accessToken}`]]);
  
  return response;

};