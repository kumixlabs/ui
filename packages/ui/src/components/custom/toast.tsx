"use client";

import { useEffect } from "react";

import {
  AnimatedToastStack,
  type AnimatedToastStackProps,
  type ToastInput,
  useAnimatedToastStack,
} from "../motion/animated-toast-stack";

interface ToastOptions {
  message?: string;
  description?: string;
  duration?: number;
  id?: string;
}

let _show: ((input: ToastInput) => string) | null = null;

export function showToast(input: ToastInput): string {
  if (!_show) {
    if (typeof console !== "undefined") {
      console.warn("[@kumix/ui] ToastContainer not mounted — toast dropped:", input.title);
    }
    return "";
  }
  return _show(input);
}

export function toastSuccess({
  message = "Success",
  description,
  duration,
  id,
}: ToastOptions = {}): string {
  return showToast({ status: "success", title: message, description, duration, id });
}

export function toastError({
  message = "An error occurred",
  description,
  duration,
  id,
}: ToastOptions = {}): string {
  return showToast({ status: "error", title: message, description, duration, id });
}

export function toastInfo({
  message = "Info",
  description,
  duration,
  id,
}: ToastOptions = {}): string {
  return showToast({ status: "info", title: message, description, duration, id });
}

export function toastLoading({
  message = "Loading...",
  description,
  duration = 0,
  id,
}: ToastOptions = {}): string {
  return showToast({ status: "loading", title: message, description, duration, id });
}

export function ToastContainer({
  position = "top-center",
  maxVisible = 4,
  defaultDuration = 4000,
  limit = 5,
  ...props
}: Omit<AnimatedToastStackProps, "toasts" | "onDismiss"> & {
  defaultDuration?: number;
  limit?: number;
}) {
  const {
    toasts,
    showToast: show,
    dismissToast,
  } = useAnimatedToastStack({
    defaultDuration,
    limit,
  });

  useEffect(() => {
    _show = show;
    return () => {
      _show = null;
    };
  }, [show]);

  return (
    <AnimatedToastStack
      toasts={toasts}
      onDismiss={dismissToast}
      position={position}
      placement="fixed"
      maxVisible={maxVisible}
      {...props}
    />
  );
}
