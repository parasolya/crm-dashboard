import React from "react";
import clsx from "clsx";
import styles from "./StatusLabel.module.scss";

export type Status = "active" | "inactive";

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

const validStatuses: Status[] = ["active", "inactive"];

export default function StatusLabel({
  children,
  status
}: StatusLabelProps) {
  const finalStatus = validStatuses.includes(status) ? status : "inactive";

  return (
    <div
      className={clsx(
        styles.statusLabel,
        finalStatus === "active" && styles.active,
        finalStatus === "inactive" && styles.inactive
      )}
    >
      {children}
    </div>
  );
}
