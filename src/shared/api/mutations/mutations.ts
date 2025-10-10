import { request } from 'graphql-request';
import type { UserRole, InputMaybe, Mutation } from '../../../graphql/graphql';

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

type UpdateUserQueryType = Pick<Mutation, 'updateUser'>

export const UPDATE_USER = async (userId: string, cvsIds: InputMaybe<string[]>, departmentId: InputMaybe<string>, positionId: InputMaybe<string>, role: InputMaybe<UserRole>, accessToken?: string | null) : Promise<UpdateUserQueryType> => {
  const query = `
    mutation updateUserInput($userId: ID!, $cvsIds: [String!], $departmentId: ID, $positionId: ID, $role: UserRole) {
    updateUser(user: { userId: $userId, cvsIds: $cvsIds, departmentId: $departmentId, positionId: $positionId, role: $role }) {
      id
    }
  }`
  const response = await request(graphqlEndpoint, query, {userId, cvsIds, departmentId, positionId, role}, [['Authorization', `Bearer ${accessToken}`]]);
  
  return response;

};