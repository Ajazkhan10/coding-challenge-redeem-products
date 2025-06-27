import { Bounce, toast } from "react-toastify";
import React from "react";
import ToastMessage from "../components/toast-message";


export const hideBodyScroll = () => {
  if (typeof window !== "undefined") {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }
};

export const showBodyScroll = () => {
  if (typeof window !== "undefined") {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
};


export const ToastSuccess = (message: string) => {
  setTimeout(toast.dismiss, 10000);
  return toast(<ToastMessage toastLabel={message} type={true} />, {
    position: "bottom-center",
    hideProgressBar: false,
    closeButton: false,
  });
};

export const ToastError = (message: string) => {
  setTimeout(toast.dismiss, 10000);
  return toast(<ToastMessage toastLabel={message} type={false} />, {
    position: "bottom-center",
    hideProgressBar: false,
    closeButton: false,
  });
};


export const ToastWarning = (message: string) =>
    toast.warning(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });





