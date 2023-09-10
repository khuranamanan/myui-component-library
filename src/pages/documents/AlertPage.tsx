import { useAlert } from "../../components/alert/AlertContext";

function AlertPage() {
  const alert = useAlert();

  const showAlert = () => alert.success("This is an Alert");

  return (
    <div>
      <button
        onClick={showAlert}
        className="bg-cyan-700 text-white hover:bg-cyan-800 p-4 m-2 rounded"
      >
        Show me an Alert
      </button>
    </div>
  );
}

export default AlertPage;
