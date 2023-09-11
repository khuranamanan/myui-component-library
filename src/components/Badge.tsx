import { twMerge } from "tailwind-merge";

type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface BadgeProps {
  color?: string;
  children: React.ReactNode;
  badgeContent?: React.ReactNode;
  position?: PositionType;
  badgeSX?: string;
  badgeWrapperSX?: string;
}

const Badge: React.FC<BadgeProps> = ({
  color = "bg-red-500",
  children,
  badgeContent,
  position = "bottom-right",
  badgeSX,
  badgeWrapperSX,
}: BadgeProps) => {
  const getBadgePosition = (position: PositionType) => {
    switch (position) {
      case "top-left":
        return "top-0 left-0 transform -";
      case "top-right":
        return "top-0 right-0 transform ";
      case "bottom-left":
        return "bottom-0 left-0 transform";
      case "bottom-right":
        return "bottom-0 right-0 transform";
      default:
        return "top-0 right-0 transform ";
    }
  };

  return (
    <span className={twMerge("relative inline-block", badgeWrapperSX)}>
      {children}
      <span
        className={twMerge(
          "p-1 rounded-full aspect-square absolute text-xs",
          color,
          getBadgePosition(position),
          badgeSX
        )}
      >
        {badgeContent}
      </span>
    </span>
  );
};

export default Badge;
