import { request } from 'graphql-request';
import type { Mutation } from '../../../graphql/graphql';

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