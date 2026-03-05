import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}`,
    credentials: 'include',
  }),
  tagTypes: ['customer'],
  endpoints: (builder) => ({
    fetchCustomer: builder.query({
      query: () => ({
        url: '/customer',
        method: 'GET',
      }),
      providesTags: ['customer'],
    }),
    createCustomer: builder.mutation({
      query: (newCustomer) => ({
        url: '/customer',
        method: 'POST',
        body: newCustomer,
      }),
      invalidatesTags: ['customer'],
    }),
    getCustomerById: builder.query({
      query: (id) => ({
        url: `/customer/${id}`,
        method: 'GET',
      }),
      providesTags: ['customer'],
    }),
    updateCustomer: builder.mutation({
      query: ({ id, ...updateData }) => ({
        url: `/customer/${id}`,
        method: 'PUT',
        body: updateData,
      }),
      invalidatesTags: ['customer'],
    }),
  }),
});

export const {
  useFetchCustomerQuery,
  useCreateCustomerMutation,
  useGetCustomerByIdQuery,
  useUpdateCustomerMutation,
} = customerApi;
