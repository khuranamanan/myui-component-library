import { AlertOptions, AlertSeverity } from "./AlertContext";
import { useTimeout } from "./hooks/useTimeout";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillWarning,
  AiOutlineClose,
} from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface AlertProps {
  close: () => void;
  children: React.ReactNode;
  severity: AlertSeverity;
  options?: AlertOptions;
}

export function Alert(props: AlertProps) {
  const { close, children, severity, options } = props;

  useTimeout(close, options?.duration || 4000);

  function getBGColor(
    severity: AlertSeverity,
    style: "filled" | "outline" = "filled"
  ) {
    if (style === "outline") {
      switch (severity) {
        case "DEFAULT":
          return "border border-neutral-200 bg-neutral-100";
        case "SUCCESS":
          return "border-2 border-green-500 bg-green-200";
        case "ERROR":
          return "border border-red-500 bg-red-200";
        case "INFO":
          return "border border-blue-500 bg-blue-200";
        case "WARN":
          return "border border-yellow-300 bg-yellow-100";
        default:
          break;
      }
    } else {
      switch (severity) {
        case "DEFAULT":
          return "bg-neutral-200";
        case "SUCCESS":
          return "bg-green-500";
        case "ERROR":
          return "bg-red-500";
        case "INFO":
          return "bg-blue-500";
        case "WARN":
          return "bg-yellow-200";
        default:
          break;
      }
    }
  }

  function getIcon(severity: AlertSeverity) {
    switch (severity) {
      case "SUCCESS":
        return <AiFillCheckCircle size={20} />;
      case "ERROR":
        return <RiErrorWarningFill size={20} />;
      case "INFO":
        return <AiFillInfoCircle size={20} />;
      case "WARN":
        return <AiFillWarning size={20} />;
      default:
        return null;
    }
  }

  return (
    <div
      className={twMerge(
        "border-2 border-transparent rounded-md max-w-xs shadow-md mt-4 flex relative cursor-pointer",
        getBGColor(props.severity, options?.style)
      )}
    >
      <div className="px-4 py-2 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <div>{getIcon(severity)}</div>
          <div className="flex-1">{children}</div>
          <div>
            <button
              onClick={close}
              className="border-none bg-transparent text-base mt-2 mr-2 cursor-pointer"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
