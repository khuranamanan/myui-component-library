import { useState } from "react";
import {
  AlertOptions,
  AlertSeverity,
  useAlert,
} from "../../components/alert/AlertContext";
import CodeExample from "../../components/CodeExample";

function AlertPage() {
  const alert = useAlert();
  const [alertType, setAlertType] = useState<AlertSeverity>("SUCCESS");
  const [alertContent, setAlertContent] = useState<string>("This is an Alert");
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    duration: 4000,
    style: "filled",
  });

  const showAlert = () => {
    const options = alertOptions;

    switch (alertType) {
      case "SUCCESS":
        alert.success(alertContent, options);
        break;
      case "ERROR":
        alert.error(alertContent, options);
        break;
      case "INFO":
        alert.info(alertContent, options);
        break;
      case "WARN":
        alert.warn(alertContent, options);
        break;
      default:
        alert.plain(alertContent, options);
        break;
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">
          Alert Component
        </h1>

        <p className="text-gray-700">
          The Alert component allows you to display informative messages to
          users with various severity levels.
        </p>
      </div>

      {/* Playground */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Playground</h3>
        <p className="text-gray-700">
          Use this playground to create custom alerts and see how they look:
        </p>

        <div className="flex gap-4 flex-wrap">
          <label>Alert Severities:</label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="alertType"
              value="success"
              checked={alertType === "SUCCESS"}
              onChange={() => setAlertType("SUCCESS")}
            />
            Success
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="alertType"
              value="error"
              checked={alertType === "ERROR"}
              onChange={() => setAlertType("ERROR")}
            />
            Error
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="alertType"
              value="info"
              checked={alertType === "INFO"}
              onChange={() => setAlertType("INFO")}
            />
            Info
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="alertType"
              value="warn"
              checked={alertType === "WARN"}
              onChange={() => setAlertType("WARN")}
            />
            Warn
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="alertType"
              value="plain"
              checked={alertType === "DEFAULT"}
              onChange={() => setAlertType("DEFAULT")}
            />
            Plain
          </label>
        </div>

        <div className="flex gap-4 flex-wrap">
          <label className="flex gap-2 items-center">
            Alert Content:
            <input
              type="text"
              value={alertContent}
              className="border border-neutral-200 px-2 py-1 rounded text-gray-700"
              onChange={(e) => setAlertContent(e.target.value)}
            />
          </label>
        </div>

        <div className="flex gap-4 flex-wrap items-center">
          <label className="flex gap-2">
            Duration (ms):
            <input
              type="number"
              value={alertOptions.duration}
              className="border border-neutral-200 px-2 py-1 rounded text-gray-700"
              onChange={(e) =>
                setAlertOptions({
                  ...alertOptions,
                  duration: parseInt(e.target.value, 10),
                })
              }
            />
          </label>
        </div>

        <div className="flex gap-4 flex-wrap">
          <label>Alert Style:</label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="alertStyle"
              value="filled"
              checked={alertOptions.style === "filled"}
              onChange={() =>
                setAlertOptions({ ...alertOptions, style: "filled" })
              }
            />
            Filled
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="alertStyle"
              value="outline"
              checked={alertOptions.style === "outline"}
              onChange={() =>
                setAlertOptions({ ...alertOptions, style: "outline" })
              }
            />
            Outline
          </label>
        </div>

        <CodeExample
          code={`function showAlert() {
  alert.${alertType.toLowerCase()}("${alertContent}", { duration: ${
            alertOptions.duration
          }, style: ${alertOptions.style} })
}`}
        />

        <button
          onClick={showAlert}
          className="bg-cyan-700 text-white hover:bg-cyan-800 px-4 py-2 rounded w-fit"
        >
          Show Custom Alert
        </button>
      </div>

      {/* Usage Example */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Usage Example</h3>
        <p className="text-gray-700">
          First, import the AlertProvider component and Wrap your application
          with the it at the highest level in your component tree. This makes
          the alert functionality available to all child components:
        </p>
        <CodeExample
          code={`import { AlertProvider } from "./AlertContext";

function App() {
  return (
    <div className="App">
      {/* Other components and content */}
      <AlertProvider>
        {/* Your app content */}
        <MyComponent />
      </AlertProvider>
    </div>
  );
}`}
        />
        <p className="text-gray-700">
          Inside your component where you want to use the alert functionality,
          you can import and use the useAlert hook to access the success, error,
          info, warn, and plain functions:
        </p>
        <CodeExample
          code={`import { useAlert } from "./AlertContext";

function MyComponent() {
  const alert = useAlert();

  const showAlert = () => {
    // Success Alert with custom options e.g., duration (in ms), style: "filled" | "outline"
    // Default Options: {duration: 4000, style: "filled" }
    alert.success("This is a success message", { duration: 3000, style: "outline" });

    // Error Alert
    alert.error("This is an error message");

    // Info Alert
    alert.info("This is an info message");

    // Warning Alert
    alert.warn("This is a warning message");

    // Default Alert (Plain)
    alert.plain("This is a plain message");
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={showAlert}>Show Alerts</button>
    </div>
  );
}`}
        />
      </div>

      {/* Alert Severities */}
      <div className="rounded-lg">
        <h2 className="text-xl font-semibold">Alert Severities:</h2>

        <p className="text-gray-700">
          The Alert component supports different severity levels:
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong>Success:</strong> Used for successful messages.
          </li>
          <li>
            <strong>Error:</strong> Used for error messages.
          </li>
          <li>
            <strong>Info:</strong> Used for informational messages.
          </li>
          <li>
            <strong>Warning:</strong> Used for warning messages.
          </li>
          <li>
            <strong>Plain:</strong> Used for general messages.
          </li>
        </ul>
      </div>

      {/* Customisations */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Customizations</h3>
        <p className="text-gray-700">
          Customize your alerts with the following options:
        </p>

        <div>
          <h2 className="text-xl font-semibold">Alert Options:</h2>

          <ul className="list-disc pl-6">
            <li>
              <strong>duration:</strong> Specifies the duration (in
              milliseconds) for which the alert is displayed. The default is{" "}
              <strong>4000 ms</strong> (4 seconds).
            </li>
            <li>
              <strong>style:</strong> Specifies the style of the alert, which
              can be either <strong>"filled"</strong> (default) or{" "}
              <strong>"outline"</strong>. The "filled" style provides a colored
              background, while the "outline" style has a white background with
              an outline.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlertPage;
