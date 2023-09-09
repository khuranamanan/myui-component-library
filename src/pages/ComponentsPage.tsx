import { Link } from "react-router-dom";
import { componentsData } from "../data/componentsData";

function ComponentsPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold text-cyan-800 text-3xl">Components</h1>
      <div className="flex gap-4 justify-center flex-wrap">
        {componentsData.map((component) => (
          <Link
            to={component.urlSlug}
            key={component.id}
            className="hover:bg-cyan-500 bg-cyan-600 text-cyan-50 px-4 py-2 text-lg rounded font-semibold"
          >
            {component.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComponentsPage;
