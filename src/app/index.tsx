import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './providers/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


/*export const axiosInstance = axios.create({
  baseURL: 'https://cv-project-js.inno.ws/api/graphql',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authorization_storage');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);*/

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)