import { Outlet } from "react-router-dom";
import * as React from "react";


export const MainLayout: React.FC = () => {
  return (
    <div className="container-fluid">
      <Outlet />
    </div>
  );
};
