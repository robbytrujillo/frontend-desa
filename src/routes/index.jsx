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
        </Routes>
    );
}