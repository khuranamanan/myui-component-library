import { AlertOptions, AlertSeverity } from "./AlertContext";
import { useTimeout } from "./hooks/useTimeout";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillWarning,
  AiOutlineClose,
} from "react-icons/ai";

interface AlertProps {
  close: () => void;
  children: React.ReactNode;
  severity: AlertSeverity;
  options?: AlertOptions;
}

export function Alert(props: AlertProps) {
  const { close, children, severity, options } = props;

  useTimeout(close, options?.duration || 4000);

  function getBGColor(severity: AlertSeverity, style?: "filled" | "outline") {
    const colorMap = {
      DEFAULT: {
        filled: "bg-neutral-200",
        outline: "border border-neutral-300 bg-white bg-neutral-200",
      },
      SUCCESS: {
        filled: "bg-green-500",
        outline: "border border-green-500 bg-white bg-green-200",
      },
      ERROR: {
        filled: "bg-red-500",
        outline: "border border-red-500 bg-white bg-red-200",
      },
      INFO: {
        filled: "bg-blue-500",
        outline: "border border-blue-500 bg-white bg-blue-200",
      },
      WARN: {
        filled: "bg-yellow-200",
        outline: "border border-yellow-200 bg-white bg-yellow-200",
      },
    };

    const color =
      style === "outline"
        ? colorMap[severity].outline
        : colorMap[severity].filled;

    return color || colorMap.DEFAULT.filled;
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
      className={`border-2 border-transparent rounded-md max-w-xs shadow-md mt-4 flex relative cursor-pointer ${getBGColor(
        props.severity,
        options?.style
      )}`}
    >
      <div className="p-4 sm:p-6">
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
