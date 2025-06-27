import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import React from "react";
import { toast } from "react-toastify";
import Icon from "../Icon/Icon";

export const ToastMessage = ({ otherClasses, toastLabel, type }:{ otherClasses?: string; toastLabel: string; type: boolean }) => {
  const toastMessageClasses = clsx(
    otherClasses,
    " w-full flex justify-between items-center gap-5"
  );
  return (
    <div className={toastMessageClasses} data-testid="toast-message">
      <div className="max-w-[600px] mx-auto w-full flex items-center justify-between gap-2">
        <Icon
          icon={type ? "success-page-icon" : "error-page-icon"}
          iconHeight={40}
          iconWidth={40}
        />
        <p
          className={clsx(
            "font-Roboto w-[95%] text-center lg:text-left lg:w-full lg:whitespace-nowrap text-base font-normal leading-6",
            type  ? "text-white" : "text-[#ff0000]"
          )}
        >
          {toastLabel}
        </p>
      </div>
      <button
        aria-label="Exit"
        title="Exit"
        aria-labelledby="Exit"
        onClick={() => toast.dismiss()}
        className="rounded-full p-1 cursor-pointer"
      >
        <Icon
          icon={
            type
              ? "cross-icon-toastify-success"
              : "cross-icon-toastify"
          }
          iconHeight={16}
          iconWidth={16}
        />
      </button>
    </div>
  );
};

export default ToastMessage;
