import {ILayoutType} from "./Layout.type";
import {Header} from "../Header/Header";

export const Layout = ({children}: ILayoutType) => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="container">
                {children}
            </div>
        </div>
    );
};