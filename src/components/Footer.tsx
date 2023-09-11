import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/khuranamanan/myui-component-library"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:scale-125 transition"
          >
            <AiFillGithub size={32} />
          </a>
          <a
            href="https://twitter.com/MananKhurrana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:scale-125 transition"
          >
            <AiFillTwitterSquare size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/manan-khurana-1b135b19b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:scale-125 transition"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} MyUI Component Library. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
