type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

export default function Toast({ message, type }: ToastProps) {
  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded shadow-md text-white 
        ${type === "SUCCESS" ? "bg-green-500" : "bg-red-500"}`}
    >
      {type === "SUCCESS" ? "✅" : "❌"} {message}
    </div>
  );
}
