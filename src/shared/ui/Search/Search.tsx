import {useCallback, useState} from "react";
import cnBind from "classnames/bind";
import styles from "./styles.module.scss"
import {useHookDispatch} from "../../lib/module/storeConfig";
import {setSearchValue} from "../../../entities/Book/module/store";
import {useDebounce} from "../../lib/hooks/useDebounce";

const cx = cnBind.bind(styles)

export const Search = () => {

    const [searchVal, setSearchVal] = useState<string>("")
    const debouncedValue = useDebounce<string>(searchVal, 500)
    const dispatch = useHookDispatch()

    const handleSearch = useCallback((val: string) => {
        setSearchVal(val)
    }, [])

    const handleSearchIsSubmit = () => {
        dispatch(setSearchValue(debouncedValue))
    }

    return (
        <div className={cx("find-block")}>
            <input
                type="text"
                value={searchVal}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Поиск по книгам и авторам"
                autoComplete="off"
                onKeyUp={(e) => {
                    (e.key === "Enter" || e.keyCode === 13) && handleSearchIsSubmit()
                }}
            />
            <input
                type="submit"
                value={searchVal}
                onClick={handleSearchIsSubmit}
            />
        </div>

    );
};