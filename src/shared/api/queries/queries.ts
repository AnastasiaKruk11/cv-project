import { request } from 'graphql-request';
import type { Query } from '../../../graphql/graphql';

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


type UserQueryType = Pick<Query, 'user'>

export const GET_USER = async (id?: string, accessToken?: string | null): Promise<UserQueryType> => {
  const query = `
    query GetUser($id: ID!) {
    user(userId: $id) {
      id
      created_at
      email
      cvs {
        id
        name
      }
      role
      department {
        id
        name
      }
      position {
        id
        name
      }
      profile {
        first_name
        last_name
        avatar
        skills {
          name
          categoryId
          mastery
        }
        languages {
          name
          proficiency
        }
      }
    }
  }`

  const response = await request(graphqlEndpoint, query, { id: id }, [['Authorization', `Bearer ${accessToken}`]])

  return response;
};

type DepartmentsQueryType = Pick<Query, 'departments'>

export const GET_DEPARTMENTS = async (accessToken?: string | null): Promise<DepartmentsQueryType> => {
  const query = `
    query GetDepartments {
    departments {
      id
      name
    }
  }`

  const response = await request(graphqlEndpoint, query, {}, [['Authorization', `Bearer ${accessToken}`]])

  return response;
};

type PositionsQueryType = Pick<Query, 'positions'>

export const GET_POSITIONS = async (accessToken?: string | null): Promise<PositionsQueryType> => {
  const query = `
    query GetPositions {
    positions {
      id
      name
    }
  }`

  const response = await request(graphqlEndpoint, query, {}, [['Authorization', `Bearer ${accessToken}`]])

  return response;
};

type SkillsQueryType = Pick<Query, 'skills'>

export const GET_SKILLS = async (accessToken?: string | null): Promise<SkillsQueryType> => {
  const query = `
    query GetSkills {
    skills {
      id
      name
      category {
        id
        name
      }
    }
  }`

  const response = await request(graphqlEndpoint, query, {}, [['Authorization', `Bearer ${accessToken}`]])

  return response;
};

type SkillGroupsQueryType = Pick<Query, 'skillCategories'>

export const GET_SKILL_GROUPS = async (accessToken?: string | null): Promise<SkillGroupsQueryType> => {
  const query = `
    query GetSkillGroups {
    skillCategories {
      id
      name
    }
  }`

  const response = await request(graphqlEndpoint, query, {}, [['Authorization', `Bearer ${accessToken}`]])

  return response;
};