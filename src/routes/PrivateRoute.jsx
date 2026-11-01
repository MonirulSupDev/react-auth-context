import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router";
import { toast } from "react-toastify";

// friendly names for each protected path
const pageNames = {
  "/orders": "Orders",
  // add more paths and their friendly names here as needed
};

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // If the user is not logged in, redirect to the login page and show a toast notification
  useEffect(() => {
    if (!loading && !user) {
      const page = pageNames[location.pathname] || "this page";
      toast.warn(`To see ${page}, you need to log in first!`, {
        toastId: "login-required", // prevent duplicate toasts
        position: "top-center",
      });
    }
  }, [loading, user, location.pathname]);

  if (loading) {
    return (
      <div className="w-full min-h-[70vh] bg-transparent flex justify-center items-center">
        <span className="loading loading-infinite loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
