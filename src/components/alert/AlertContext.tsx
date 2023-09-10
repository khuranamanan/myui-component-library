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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

// eslint-disable-next-line react-refresh/only-export-components
export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert should be used Within AlertProvider");
  }
  return context;
}
