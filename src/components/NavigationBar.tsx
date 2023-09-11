import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  function handleClassNames({ isActive }: { isActive: boolean }) {
    return `rounded-lg hover:bg-slate-900/60 px-3 py-2 ${
      isActive ? "font-bold" : ""
    }`;
  }

  return (
    <div className="p-4 bg-cyan-800 text-cyan-50 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 sm:flex-row  sm:justify-between flex-wrap">
        <Link to={"/"} className="text-2xl font-bold">
          MyUI Component Library
        </Link>

        <div className="flex gap-4">
          <NavLink to="/" className={handleClassNames}>
            Home
          </NavLink>
          <NavLink to="/components" className={handleClassNames}>
            Components
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
