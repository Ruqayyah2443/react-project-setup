import clsx from "clsx";
import "./card.css";
export const Card = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("card", `card-${variant}`, className)}
      {...props}
    >
      {children}
    </div>
  );
};
