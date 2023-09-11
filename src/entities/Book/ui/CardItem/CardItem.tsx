import cnBind from "classnames/bind";

import styles from "./style.module.scss"
import {ICardType} from "../../type/CardItem.type";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../shared/const/Routing";

const cx = cnBind.bind(styles)
export const CardItem = ({src, author, category, title, id}: ICardType) => {
    return (
        <Link to={ ROUTES.BOOK + `${id}`}>
            <div className={cx("card")}>
                <div className={cx("card-header")}>
                    <img className={cx("h-img")} src={src} alt=""/>
                </div>
                <div className={cx("card-body")}>
                    <div className={cx("card-desc")}>
                        <span className={cx("i-category")}>{category}</span>
                        <span className={cx("i-title")}>{title}</span>
                        <div className={cx("i-author")}>
                            {author.map((el, i) => <span key={i} >{el}</span> )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};