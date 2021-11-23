import PlusIcon from "../icons/PlusIcon";

export const CardWrapper = ({ modal }) => {
  return (
    <button
      onClick={() => modal(true)}
      className={`w-76 h-95 rounded-xl  grid place-content-center border-4 border-primary-50`}
    >
      <div className="p-7 grid place-content-center border-4 rounded-full border-primary-50">
        <PlusIcon />
      </div>
    </button>
  );
};
