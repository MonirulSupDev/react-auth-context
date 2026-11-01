import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-362 px-6 mx-auto">
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
