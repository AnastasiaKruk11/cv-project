import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from "../store/authStore";
import { UPDATE_USER, DOWNLOAD_AVATAR, DELETE_AVATAR, DELETE_SKILLS, ADD_SKILL, UPDATE_SKILL } from '../api/mutations/mutations';
import type { UpdateUserInput, UploadAvatarInput, DeleteAvatarInput, DeleteProfileSkillInput, AddProfileSkillInput, UpdateProfileSkillInput } from '../../graphql/graphql';
import { useQueryClient } from '@tanstack/react-query';

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

export const useMutateAvatarUpload = () => {
const { accessToken } = useAuthStore();
const queryClient = useQueryClient();

    return useMutation({
    mutationFn: ( {userId, base64, size, type}: UploadAvatarInput ) => {
        
        return DOWNLOAD_AVATAR( userId, base64, size, type, accessToken )
    },
  
    onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
        console.error('Error:', error);
          },
    })
}

export const useMutateAvatarDelete = () => {
const { accessToken } = useAuthStore();
const queryClient = useQueryClient();

    return useMutation({
    mutationFn: ( {userId}: DeleteAvatarInput ) => {
        
        return DELETE_AVATAR( userId, accessToken )
    },

    onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['user'] });
    },

    onError: (error) => {
        console.error('Error:', error);
          },
    })
}

export const useMutateSkillsDelete = () => {
const { accessToken } = useAuthStore();
const queryClient = useQueryClient();

    return useMutation({
    mutationFn: ( {userId, name}: DeleteProfileSkillInput ) => {
        
        return DELETE_SKILLS( userId, name, accessToken )
    },

    onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['user'] });
    },

    onError: (error) => {
        console.error('Error:', error);
          },
    })
}

export const useMutateAddSkill = () => {
const { accessToken } = useAuthStore();
const queryClient = useQueryClient();

    return useMutation({
    mutationFn: ( {userId, name, categoryId, mastery}: AddProfileSkillInput ) => {
        
        return ADD_SKILL( userId, name, categoryId as string, mastery, accessToken )
    },

    onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['user'] });
    },

    onError: (error) => {
        console.error('Error:', error);
          },
    })
}

export const useMutateUpdateSkill = () => {
const { accessToken } = useAuthStore();
const queryClient = useQueryClient();

    return useMutation({
    mutationFn: ( {userId, name, categoryId, mastery}: UpdateProfileSkillInput ) => {
        
        return UPDATE_SKILL( userId, name, categoryId as string, mastery, accessToken )
    },

    onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['user'] });
    },

    onError: (error) => {
        console.error('Error:', error);
          },
    })
}