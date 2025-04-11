
export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-2xl text-sm font-semibold shadow-md transition-all ${className}`}
    >
      {children}
    </button>
  );
}
