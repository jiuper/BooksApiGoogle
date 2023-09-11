import {Route, Routes} from "react-router-dom";
import {Home} from "./Home/Home";
import {Layout} from "../widgets/ui/Layout/Layout";
import {Book} from "./Book/Book";
import {ROUTES} from "../shared/const/Routing";

export const Routing = () => {

    return (
        <Layout>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.BOOK + ":id"} element={<Book/>}/>
            </Routes>
        </Layout>
    );
};
