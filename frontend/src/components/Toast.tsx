import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  icon?: string;
  onClose: () => void;
};

export default function Toast({ message, type, icon, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded shadow-md bg-white
        ${type === "SUCCESS" ? "text-green-500" : "text-red-500"}`}
    >
      {icon ? icon : type === "SUCCESS" ? "✅" : "❌"} {message}
    </div>
  );
}
