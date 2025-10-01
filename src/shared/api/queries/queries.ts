import { request } from 'graphql-request';
import type { Query } from '../../../graphql/graphql';
import { useAuthStore } from '../../store/authStore';

const graphqlEndpoint = 'https://cv-project-js.inno.ws/api/graphql';

type LoginQueryType = Pick<Query, 'login'>

export const LOG_IN = async (email: string, password: string): Promise<LoginQueryType> => {
  const query = `
    query logIn($email: String!, $password: String!) {
    login(auth: { email: $email, password: $password }) {
      user {
        id
      }
      access_token
    }
  }`
    const response = await request(graphqlEndpoint, query, {email, password});

    return response;
};


/*const fetchGraphQLData = async (query, variables) => {
  const response = await axiosInstance.post('https://cv-project-js.inno.ws/api/graphql', {
    query {
      `
    query user($id: ID!) {
    user(userId: $id) {
      id
      created_at
      email
      profile {
        first_name
        last_name
        avatar
      }
    }
  }`
    },
    variables,
  });
  return response;
};*/


type UserQueryType = Pick<Query, 'user'>

export const GET_USER = async (id?: string, accessToken?: string | null): Promise<UserQueryType> => {
  const query = `
    query GetUser($id: ID!) {
    user(userId: $id) {
      id
      created_at
      email
      profile {
        first_name
        last_name
        avatar
      }
    }
  }`

  const response = await request(graphqlEndpoint, query, { id: id }, [['Authorization', `Bearer ${accessToken}`]])

  return response;
}