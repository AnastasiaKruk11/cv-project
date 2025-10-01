import { Sidebar } from "../../shared/ui/sidebar/Sidebar";
import { GET_USER } from "../../shared/api/queries/queries";
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router";
import { useAuthStore } from "../../shared/store/authStore";


const useGetUser = (id: string | undefined) => {
const { accessToken } = useAuthStore();

    return useQuery({
    queryKey: ['user', id],
    queryFn: () => GET_USER( id, accessToken ),
    enabled: !!id    
  })
}

export const User = () => {

    const {id} = useParams();

    const { data } = useGetUser(id);

    return (
        <div className={'h-full'}>
            <Sidebar userAvatar={''} userName={''} />
            <div></div>
        </div>
    )
}