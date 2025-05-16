import React from "react";

export type StatusType =
  | "downloaded"
  | "draft"
  | "saved";

interface StatusTagProps {
  status: StatusType;
}

// StatusTag component
const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  // Map styles for each status
  const statusStyles: Record<StatusType, { color: string; bgColor: string }> = {
    draft: {
      color: "#000000",
      bgColor: "#FFCF4B",
    },
    downloaded: {
      color: "#FFFFFF",
      bgColor: "#3B934E",
    },
    saved: {
      color: "#FFFFFF",
      bgColor: "#2563EB",
    },
  };

  const { color, bgColor } = statusStyles[status];

  return (
    <span
      style={{ backgroundColor: bgColor }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium"
    >
      <span>•</span>
      <span style={{ color }} className="text-[12px] font-[500]">{status.toUpperCase()}</span>
    </span>
  );
};

export default StatusTag;
