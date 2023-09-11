import {CardItem} from "../../entities/Book/ui/CardItem/CardItem";
import {useGetBooksQuery} from "../../entities/Book/api/booksApi";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"

import {useHookDispatch, useHookSelector} from "../../shared/lib/module/storeConfig";
import {useEffect, useMemo, useState} from "react";
import type {Item} from "../../entities/Book/type/Book.type";
import {isPagination} from "../../entities/Book/module/store";

const cx = cnBind.bind(styles)

export const Home = () => {
        const dispatch = useHookDispatch()
        const searchVal = useHookSelector(state => state.booksDataReducer.searchBook)
        const booksList = useHookSelector(state => state.booksDataReducer.books)
        const {data, isLoading} = useGetBooksQuery(searchVal, {skip: searchVal.searchValue === ""})
        const [books, setBooks] = useState<Item[]>([])

        const handlePagination = () => {
            dispatch(isPagination())
            setBooks(books.concat(booksList.items))
        }
        useEffect(() => {

            if (searchVal.sorting && searchVal.searchValue && searchVal.category) {
                setBooks([])
            }

        }, [ searchVal.category, searchVal.searchValue, searchVal.sorting])

        const list = useMemo(() =>
                books.length
                    ? books
                    : booksList.items
            , [books, booksList.items])

        if (isLoading) return <div className={cx("c-loader")}>
            <div className={cx("loader")}></div>
        </div>

        return (
            <div className={cx("main")}>
                {data && <div>Found {data && data.totalItems} results</div>}
                <div className={cx("cards")}>
                    {
                        list.length
                            ? list.map((el, i) =>
                                <CardItem
                                    key={i}
                                    id={el.id}
                                    title={el.volumeInfo.title}
                                    src={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.smallThumbnail : ""}
                                    author={el.volumeInfo.authors ? el.volumeInfo.authors : []}
                                    category={el.volumeInfo.categories ? el.volumeInfo.categories[0] : ""}
                                />
                            )
                            : <div style={{textAlign: "center"}}>Not Found</div>
                    }
                </div>
                {data && <button onClick={handlePagination}>load more</button>}
            </div>
        );
    }
;