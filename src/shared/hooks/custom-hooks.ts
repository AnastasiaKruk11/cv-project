import { GET_USER, GET_DEPARTMENTS, GET_POSITIONS } from "../../shared/api/queries/queries";
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from "../../shared/store/authStore";

export const useGetUser = (id: string | undefined) => {
const { accessToken } = useAuthStore();

    return useQuery({
    queryKey: ['user', id],
    queryFn: () => GET_USER( id, accessToken ),
    enabled: !!id    
  })
}

export const useGetDepartments = () => {
const { accessToken } = useAuthStore();

    return useQuery({
    queryKey: ['departments'],
    queryFn: () => GET_DEPARTMENTS( accessToken )
  })
}

export const useGetPositions = () => {
const { accessToken } = useAuthStore();

    return useQuery({
    queryKey: ['positions'],
    queryFn: () => GET_POSITIONS( accessToken )
  })
}