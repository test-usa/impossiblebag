import { Outlet } from "react-router-dom";

import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <div className="min-h-screen  flex max-h-full   flex-nowrap justify-start  transition-[padding] duration-200 p-0">
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
