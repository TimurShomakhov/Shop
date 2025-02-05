import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-base-200 p-4 flex justify-between">
        <Link to="/" className="text-lg font-bold">FakeShop</Link>
        <div>
          <Link to="/" className="btn btn-ghost">Home</Link>
          <Link to="/cart" className="btn btn-ghost">Cart</Link>
        </div>
      </nav>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
