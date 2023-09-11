import {baseRTKQuery} from "../../../shared/api/config/baseRTKQuery";
import {apiKey} from "../../../shared/const/var";
import {ROUTES_API} from "../../../shared/const/Routing";
import type {IBooksApi, IBookType} from "../type/Book.type";

export const booksApi = baseRTKQuery.injectEndpoints({
    endpoints: build => ({
        getBooks: build.query<IBookType, IBooksApi>({
            query: (queryParams) => ({
                url: `${ROUTES_API.SEARCH_NAME}${queryParams.category !== "all" ? queryParams.searchValue + "+subject:" + queryParams.category : queryParams.searchValue}`,
                params: {orderBy: queryParams.sorting, maxResults: 30, startIndex: queryParams.startIndex, key: apiKey}
            }),
            providesTags: [{type: "Books"}],
            transformErrorResponse: (response: { status: string | number }) => response,
        }),
    }),
});

export const {useGetBooksQuery} = booksApi;

export const {
    endpoints: {getBooks},
} = booksApi;