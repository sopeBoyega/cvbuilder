import React from "react";

export type StatusType =
  | "downloaded"
  | "drafts"
  | "saved";

interface StatusTagProps {
  status: StatusType;
}

// StatusTag component
const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  // Map styles for each status
  const statusStyles: Record<StatusType, { color: string; bgColor: string }> = {
    drafts: {
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
    <div
      className="flex items-center justify-center gap-1 px-1  rounded-full  text-sm font-medium"
      style={{ backgroundColor: bgColor }}
    >
      <p style={{ color }} className="mb-1">•</p>
      <span className="text-[8px] font-[600]" style={{ color }}>{status.toUpperCase()}</span>
    </div>
  );
};

export default StatusTag;
