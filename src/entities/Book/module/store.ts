import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getBooks} from "../api/booksApi";
import type {IBooksApi, IBookType} from "../type/Book.type";


interface InitDate {
    books: IBookType
    searchBook: IBooksApi;
}

const initialState: InitDate = {
    books: {kind: "", totalItems: 0, items: []},
    searchBook: {searchValue: "", sorting: "relevance", category: "all", startIndex: 0}
}

export const booksData = createSlice({
    name: "booksDate",
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchBook.searchValue = action.payload
        },
        isSorting(state, action: PayloadAction<string>) {
            state.searchBook.sorting = action.payload
        },
        isFilter(state, action: PayloadAction<string>) {
            state.searchBook.category = action.payload
        },
        isPagination(state) {
            state.searchBook.startIndex += 30
        }
    },
    extraReducers: builder => {
        builder.addMatcher(getBooks.matchFulfilled, (state: InitDate, action) => {
            state.books = action.payload;
        });
    }
})

export const {setSearchValue, isSorting, isFilter,isPagination} = booksData.actions
export const booksDataReducer = booksData.reducer