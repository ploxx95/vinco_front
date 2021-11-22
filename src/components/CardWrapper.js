import PlusIcon from "../icons/PlusIcon";

export const CardWrapper = () => {
  return (
    <div
      className={`w-76 h-95 rounded-xl  grid place-content-center border-4 border-primary-50`}
    >
      <div className="p-7 grid place-content-center border-4 rounded-full border-primary-50">
        <PlusIcon />
      </div>
    </div>
  );
};
