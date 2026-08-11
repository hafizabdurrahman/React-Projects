// components/Button.jsx
export default function Button({ children, onClick ,type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-5 py-2.5 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700
                 dark:bg-blue-500 dark:hover:bg-blue-600
                 transition-colors duration-200 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
    >
      {children}
    </button>
  );
}