export const CardWrapper = ({ children, className }) => {
  return (
    <div
      className={`w-76 h-95 rounded-xl p-8 grid place-content-center ${className}`}
    >
      {children}
    </div>
  );
};
