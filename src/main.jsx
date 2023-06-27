import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './route/Route.jsx';
import AuthProvider from './provider/AuthProvider';

import { HelmetProvider } from 'react-helmet-async';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-xl mx-auto'>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
          </AuthProvider>
        </HelmetProvider>
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
