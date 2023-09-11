import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosBase';

export const baseRTKQuery = createApi({
    baseQuery: axiosBaseQuery(),
    reducerPath: "baseRTKQuery",
    tagTypes: ["Books", "Categories", "Sorting"],
    endpoints: () => ({}),
});