import { Badge, BadgeProps } from "@/components/ui/badge";
import { ArrowDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const DiscountBadge = ({
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <Badge className={twMerge("px-2 py-[2px]", className)} {...props}>
      <ArrowDownIcon size={12} /> {children}%
    </Badge>
  );
};
