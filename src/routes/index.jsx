// import react router dom
import { Routes, Route } from "react-router-dom";

// import private routes
import PrivateRoutes from "./PrivateRoutes";

//======================================================
// view admin
//======================================================

// import view login
import Login from '../views/Auth/Login';

// import view forbidden
import Forbidden from '../views/Auth/Forbidden';

// import view dashboard
import Dashboard from "../views/Admin/Dashboard/Index";

// import view permissions
import PermissionsIndex from "../views/Admin/Permissions/Index";

// import view roles index
import RolesIndex from "../views/Admin/Roles/Index";

// import view roles create
import RolesCreate from "../views/Admin/Roles/Create";

// import view roles edit
import RolesEdit from "../views/Admin/Roles/Edit";

// import view users index
import UsersIndex from "../views/Admin/Users/Index";

// import view users create
import UsersCreate from "../views/Admin/Users/Create";

// import view users edit
import UsersEdit from "../views/Admin/Users/Edit";

// import view categories index
import CategoriesIndex from "../views/Admin/Categories/Index";

// import view categories create
import CategoriesCreate from "../views/Admin/Categories/Create";

// import view categories edit
import CategoriesEdit from "../views/Admin/Categories/Edit";

// import view posts index
import PostsIndex from "../views/Admin/Posts/Index";

// import view posts create
import PostsCreate from "../views/Admin/Posts/Create";

// import view posts edit
import PostsEdit from "../views/Admin/Posts/Edit";

// import view pages index
import PagesIndex from "../views/Admin/Pages/Index";

// import view pages create
import PagesCreate from "../views/Admin/Pages/Create";

// import view pages edit
import PagesEdit from "../views/Admin/Pages/Edit";

// import view products index
import ProductsIndex from "../views/Admin/Products/Index";

// import view products create
import ProductsCreate from "../views/Admin/Products/Create";

// import view products edit
import ProductsEdit from "../views/Admin/Products/Edit";

// import view products index
import PhotosIndex from "../views/Admin/Photos/Index";

// import view sliders index
import SlidersIndex from "../views/Admin/Sliders/Index";

export default function RoutesIndex() {
    return (
        <Routes>
            {/* route "/login" */}
            <Route path="/login" element={<Login />} />

            {/* route "/forbidden" */}
            <Route path="/forbidden" element={<Forbidden />} />

            {/* private route "/admin/dashboard" */}
            <Route 
                path="/admin/dashboard" 
                element={
                    <PrivateRoutes> 
                        <Dashboard />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/permissions" */}
            <Route 
                path="/admin/permissions"
                element={
                    <PrivateRoutes>
                        <PermissionsIndex />
                    </PrivateRoutes>
                }
            />
           
            {/* private route "/admin/roles" */}
            <Route 
                path="/admin/roles"
                element={
                    <PrivateRoutes>
                        <RolesIndex />
                    </PrivateRoutes>
                }
            />

            {/* private route '/admin/roles/create */}
            <Route
                path="/admin/roles/create"
                element={
                    <PrivateRoutes>
                        <RolesCreate />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/roles/edit" */}
            <Route
                path="/admin/roles/edit/:id"
                element={
                    <PrivateRoutes>
                        <RolesEdit />
                    </PrivateRoutes>
                    }
            />

            {/* private route "/admin/users" */}
            <Route
                path="/admin/users"
                element={
                    <PrivateRoutes>
                        <UsersIndex />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/users/create" */}
            <Route
                path="/admin/users/create"
                element={
                    <PrivateRoutes>
                        <UsersCreate />
                    </PrivateRoutes>
                }
            />
            
            {/* private route "/admin/users/edit" */}
            <Route
                path="/admin/users/edit/:id"
                element={
                    <PrivateRoutes>
                        <UsersEdit />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/categories" */}
            <Route
                path="/admin/categories"
                element={
                    <PrivateRoutes>
                        <CategoriesIndex />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/categories/create" */}
            <Route
                path="/admin/categories/create"
                element={
                    <PrivateRoutes>
                        <CategoriesCreate />
                    </PrivateRoutes>
                }
            />    
            
            {/* private route "/admin/categories/edit" */}
            <Route
                path="/admin/categories/edit/:id"
                element={
                    <PrivateRoutes>
                        <CategoriesEdit />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/posts" */}
            <Route
                path="/admin/posts"
                element={
                    <PrivateRoutes>
                        <PostsIndex />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/posts/create" */}
            <Route
                path="/admin/posts/create"
                element={
                    <PrivateRoutes>
                        <PostsCreate />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/posts/edit" */}
            <Route
                path="/admin/posts/edit/:id"
                element={
                    <PrivateRoutes>
                        <PostsEdit />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/pages" */}
            <Route
                path="/admin/pages"
                element={
                    <PrivateRoutes>
                        <PagesIndex />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/pages/create" */}
            <Route
                path="/admin/pages/create"
                element={
                    <PrivateRoutes>
                        <PagesCreate />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/pages/edit" */}
            <Route
                path="/admin/pages/edit/:id"
                element={
                    <PrivateRoutes>
                        <PagesEdit />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/products" */}
            <Route
                path="/admin/products"
                element={
                    <PrivateRoutes>
                        <ProductsIndex />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/products/create" */}
            <Route
                path="/admin/products/create"
                element={
                <PrivateRoutes>
                    <ProductsCreate />
                </PrivateRoutes>
                }
            />

            {/* private route "/admin/products/edit" */}
            <Route
                path="/admin/products/edit/:id"
                element={
                    <PrivateRoutes>
                        <ProductsEdit />
                    </PrivateRoutes>
                }
            />

            {/* private route "/admin/photos" */}
            <Route
                path="/admin/photos"
                element={
                <PrivateRoutes>
                    <PhotosIndex />
                </PrivateRoutes>
                }
            />

            {/* private route "/admin/sliders" */}
            <Route
                path="/admin/sliders"
                element={
                    <PrivateRoutes>
                        <SlidersIndex />
                    </PrivateRoutes>
                }
            />
        </Routes>
    );
}

