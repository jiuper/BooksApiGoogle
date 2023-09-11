import cnBind from "classnames/bind";

import styles from "./style.module.scss"
import {ICardType} from "../../type/CardItem.type";

const cx = cnBind.bind(styles)
export const CardInfo = ({author, listCategory, src, title, description}: ICardType) => {
    return (
        <div className={cx("card-i")}>
            <div className={cx("info-h")}>
                <img className={cx("h-img")} src={src} alt={title}/>
            </div>
            <div className={cx("info-b")}>
                <div className={cx("i-category")}>
                    {listCategory && listCategory.map((el, i) =>
                        i === listCategory.length - 1
                            ? <span key={i}>{el}</span>
                            : <span key={i}>{el} /</span>
                    )}
                </div>
                <span className={cx("i-title")}>{title}</span>
                <div className={cx("i-author")}>
                    {author.map((el, i) => <span key={i}>{el} </span>)}
                </div>

                <span className={cx("i-desc")}>{description}</span>
            </div>
        </div>
    );
};