import { Link, Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <div className="Wrapper">
      <nav>
        <Link to="/">Home</Link> | <Link to="messy">Messy Component</Link>
      </nav>
      <Outlet />
    </div>
  );
}
