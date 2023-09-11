import {Link, useNavigate, useParams} from "react-router-dom";
import {useHookSelector} from "../../shared/lib/module/storeConfig";
import {useEffect, useMemo} from "react";
import {ROUTES} from "../../shared/const/Routing";
import {Item} from "../../entities/Book/type/Book.type";
import {CardInfo} from "../../entities/Book/ui/CardInfo/CardInfo";

export const Book = () => {
    const {id} = useParams()
    const href = useNavigate()
    const booksList = useHookSelector(state => state.booksDataReducer.books.items)
    const bookItem: Item[] = useMemo(() => id ? booksList.filter(el => el.id === id) : [], [id, booksList])

    useEffect(() => {
        if (!booksList.length) {
            href(ROUTES.HOME)
        }
    }, [href, booksList])
    if (!bookItem.length) return <div className="c-loader">
        <Link to={ROUTES.HOME} className="error">NOT FOUND BOOK</Link>
    </div>
    return (
        <>
            {
                bookItem.map(el =>
                    <CardInfo
                        key={el.id}
                        id={el.id}
                        src={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.smallThumbnail : ""}
                        listCategory={el.volumeInfo.categories ? el.volumeInfo.categories : []}
                        author={el.volumeInfo.authors}
                        title={el.volumeInfo.title}
                        description={el.volumeInfo.description ? el.volumeInfo.description : "Not Desc"}
                    />)
            }
        </>
    )
};