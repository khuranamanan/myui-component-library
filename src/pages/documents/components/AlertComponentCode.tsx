import CodeExample from "../../../components/CodeExample";

function AlertComponentCode() {
  return (
    <div className="flex flex-col gap-2 flex-wrap">
      <h3 className="text-2xl font-semibold">Alert Component Code</h3>
      <p className="text-gray-700">
        Here's the code for the Alert component that you can copy and use in
        your project:
      </p>
      <p className="text-gray-700 bg-blue-50 p-2 rounded">
        Note- You'll need to install TailwindCSS, uuid, @types/uuid,
        tailwind-merge and react-icons packages first.
      </p>
      <CodeExample
        code={`// alert/AlertContext.tsx

import { useState, useMemo, useContext, createContext } from "react";
import { createPortal } from "react-dom";
import { v4 as uuid } from "uuid";

import { Alert } from "./Alert";

export interface AlertOptions {
  duration?: number;
  style?: "filled" | "outline";
}

export type AlertSeverity = "SUCCESS" | "ERROR" | "INFO" | "WARN" | "DEFAULT";

interface AlertContextInterface {
  success: (content: string, options?: AlertOptions) => void;
  error: (content: string, options?: AlertOptions) => void;
  info: (content: string, options?: AlertOptions) => void;
  warn: (content: string, options?: AlertOptions) => void;
  plain: (content: string, options?: AlertOptions) => void;
}

export const AlertContext = createContext<AlertContextInterface | null>(null);

interface AlertInterface {
  id: string;
  content: string;
  severity: AlertSeverity;
  options?: AlertOptions;
}

interface AlertProviderProps {
  children: React.ReactNode;
}

export function AlertProvider(props: AlertProviderProps) {
  const [alerts, setAlerts] = useState<AlertInterface[]>([]);

  const open = (
    content: string,
    severity: AlertSeverity,
    options?: AlertOptions
  ) =>
    setAlerts((currentalerts) => [
      ...currentalerts,
      { id: uuid(), content, severity, options },
    ]);

  const success = (content: string, options?: AlertOptions) =>
    open(content, "SUCCESS", options);
  const error = (content: string, options?: AlertOptions) =>
    open(content, "ERROR", options);
  const info = (content: string, options?: AlertOptions) =>
    open(content, "INFO", options);
  const warn = (content: string, options?: AlertOptions) =>
    open(content, "WARN", options);
  const plain = (content: string, options?: AlertOptions) =>
    open(content, "DEFAULT", options);

  const close = (id: string) =>
    setAlerts((currentAlerts) =>
      currentAlerts.filter((toast) => toast.id !== id)
    );

  const contextValue = useMemo(
    () => ({ success, error, info, warn, plain }),
    []
  );

  return (
    <AlertContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="fixed bottom-4 right-4">
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              close={() => close(alert.id)}
              severity={alert.severity}
              options={alert.options}
            >
              {alert.content}
            </Alert>
          ))}
        </div>,
        document.body
      )}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert should be used Within AlertProvider");
  }
  return context;
}
`}
      />
      <CodeExample
        code={`// alert/Alert.tsx
      
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
`}
      />
      <CodeExample
        code={`// alert/hooks/useTimout.tsx
      
import { useEffect, useRef } from "react";

type Callback = () => void;

export const useTimeout = (callback: Callback, delay: number | null) => {
  const savedCallback = useRef<Callback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);
};
`}
      />
    </div>
  );
}

export default AlertComponentCode;
