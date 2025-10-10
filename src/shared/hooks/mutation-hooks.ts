import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from "../store/authStore";
import { UPDATE_USER } from '../api/mutations/mutations';
import type { UpdateUserInput } from '../../graphql/graphql';

export const useMutateUserData = () => {
const { accessToken } = useAuthStore();

    return useMutation({
    mutationFn: ( {userId, cvsIds, departmentId, positionId, role}: UpdateUserInput ) => {
        
        return UPDATE_USER( userId, cvsIds, departmentId, positionId, role, accessToken )
    },
  
    onSuccess: (data) => {
        console.log(data);
    },
    onError: (error) => {
        console.error('Error:', error);
          },
    })
}