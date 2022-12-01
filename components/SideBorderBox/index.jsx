import clsxm from "../../lib/clsxm.js";
export const SideBorderBox = ({ children, containerClass, inverted }) => {
  return (
    <div className={clsxm("relative py-16 text-light ", containerClass)}>
      <div
        className={clsxm(
          "absolute top-4 -left-4 h-full w-full rounded-medium border-1 border-primary  ",
          containerClass,
          { "bg-primary": inverted, "bg-black": !inverted }
        )}
      />
      <div
        className={clsxm(
          "absolute top-0 left-0 h-full w-full  rounded-small bg-dark border-1 border-primary p-3",
          containerClass,
          {
            "bg-primary": !inverted,
            "text-black": !inverted,
            "bg-black": inverted,
            "text-primary": inverted,
          }
        )}
      >
        <div className="border-1 border-black h-full w-full ">{children}</div>
      </div>
    </div>
  );
};
