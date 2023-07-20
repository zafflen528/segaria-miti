import { Outlet } from "react-router";

const Layout = () => {
    return (
        <main className="h-main-container-height bg-mgrey w-main-container-width tracking-wide rounded-lg shadow-md">
            <Outlet />
        </main>
    );
};

export default Layout;
