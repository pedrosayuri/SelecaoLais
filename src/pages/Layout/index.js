import { Outlet } from "react-router-dom";

import { AreaLayout } from './styled';

const Layout = () => {
  return (
    <AreaLayout>
        <div className="Reset">
            <Outlet />
        </div>
    </AreaLayout>
  )
};

export default Layout;