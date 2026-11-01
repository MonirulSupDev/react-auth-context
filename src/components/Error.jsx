import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-red-500">Error</h2>
      <p>Something went wrong!</p>
      <p className="mt-2">
        But you can go back to the{" "}
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>{" "}
        page.
      </p>
    </div>
  );
};

export default Error;
