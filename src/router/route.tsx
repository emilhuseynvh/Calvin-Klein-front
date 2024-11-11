import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicPage from "../layout/PublicPage";
import Home from "../page/PublicPage/Home";
import CreateAccount from "../page/PublicPage/CreateAccount";
import Collection from "../page/PublicPage/Collection";
import AdminLayout from "../layout/AdminLayout";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<PublicPage />}>
                <Route index path="/" element={<Home />} />
                <Route path="/createaccount" element={<CreateAccount />} />
                <Route path="/collection" element={<Collection />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route />
            </Route>
        </>
    )
);
