import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function GridContainer({
  children,
  className,
}: GridContainerProps) {
  return (
    <div className={twMerge("mx-auto px-3 w-full max-w-container", className)}>
      {children}
    </div>
  );
}
