import { Link, useLocation } from "react-router-dom";
import { componentsData } from "../data/componentsData";
import { twMerge } from "tailwind-merge";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="text-gray-700 h-screen max-w-xs w-60 py-6 px-4 sticky top-0 bottom-0 overflow-y-auto">
      <div className="mb-10">
        <h4 className="text-xl font-semibold mb-3 text-cyan-950">Components</h4>
        <ul>
          {componentsData.map((component) => (
            <li key={component.id} className="mb-2">
              <Link
                to={`/components/${component.urlSlug}`}
                className={twMerge(
                  "block px-4 py-2 rounded hover:bg-cyan-100 text-sm",
                  location.pathname === `/components/${component.urlSlug}` &&
                    "bg-cyan-800 text-cyan-50 hover:bg-cyan-900"
                )}
              >
                {component.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
