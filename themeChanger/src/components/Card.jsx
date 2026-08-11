// components/Card.jsx
export default function Card({ children }) {
  return (
    <div
    className="w-full max-w-sm p-6 rounded-2xl shadow-md
        bg-gray-50 dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        transition-colors duration-300">
      {children}
    </div>
  );
}