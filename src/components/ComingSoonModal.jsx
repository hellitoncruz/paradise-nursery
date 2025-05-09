import React, {useEffect} from "react";

export default function ComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 3 segundos

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <div className="popUp">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
        <p className="mb-6">This feature is under development.</p>
        <button
          onClick={onClose}
          className="closePopUp"
        >
          x
        </button>
      </div>
    </div>
  );
}
