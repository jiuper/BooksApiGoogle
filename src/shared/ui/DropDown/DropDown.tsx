import cnBind from "classnames/bind";

import type {IDropDownType} from "./DropDown.type";

import styles from "./style.module.scss";
import {useHookDispatch} from "../../lib/module/storeConfig";
import {useMemo, useState} from "react";
import {isFilter, isSorting} from "../../../entities/Book/module/store";

const cx = cnBind.bind(styles);
export const DropDown = ({options, isToggle}: IDropDownType) => {
    const [value, setValue] = useState<string>("")
    const handleAction = useMemo(() => isToggle === "isFilter" ? isFilter : isSorting, [isToggle])
    const dispatch = useHookDispatch()
    const handleChange = (e: string) => {
        setValue(e)
        dispatch(handleAction(e))
    }
    return (
        <div className={cx("dropdown")}>
            <select value={value} onChange={(e) => handleChange(e.target.value)} className={cx("dropdown-c")}>
                {options.map((el, i) =>
                    <option
                        key={i}
                        value={el.value}
                    >
                        {el.title}
                    </option>
                )}
            </select>
        </div>
    );
};
