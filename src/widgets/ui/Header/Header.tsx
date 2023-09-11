import cnBind from "classnames/bind"
import styles from "./style.module.scss"
import {Search} from "../../../shared/ui/Search/Search";
import {optionsFilter, optionsSorting} from "../../../shared/const/var";
import {Logo} from "../../../shared/ui/Logo/Logo";
import Logotype from "../../../shared/assets/images/logo.png"
import {DropDown} from "../../../shared/ui/DropDown/DropDown";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../shared/const/Routing";

const cx = cnBind.bind(styles)
export const Header = () => {

    return (
        <div className={cx("header")}>
            <div className={cx("container" , "header-c")}>
                <div className={cx("h-title")}>
                    <Link to={ROUTES.HOME}>
                        <Logo src={Logotype} alt="Books"/>
                    </Link>
                </div>
                <div className={cx("h-tools")}>
                    <div className={cx("t-search")}>
                        <Search/>
                    </div>
                    <div className={cx("t-utils")}>
                        <div className={cx("t-filter")}>
                            <span>Categories</span>
                            <DropDown
                                isToggle={"isFilter"}
                                options={optionsFilter}
                            />
                        </div>
                        <div className={cx("t-sorting")}>
                            <span>Sorting by</span>
                            <DropDown
                                isToggle={"isSorting"}
                                options={optionsSorting}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};