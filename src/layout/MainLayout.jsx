import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div>
      {/* <Header /> */}
      <div className="min-h-screen  flex max-h-full   flex-nowrap justify-start  transition-[padding] duration-200 p-0">
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
