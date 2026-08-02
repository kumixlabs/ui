"use client";

import { CircleAlertIcon, ShieldQuestionMarkIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Spinner } from "../ui/spinner";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  description,
  confirmText,
  cancelText,
  loading = false,
}: ConfirmDialogProps) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        if (loading && !next) return;
        onOpenChange(next);
      }}
    >
      <AlertDialogContent>
        <div className="flex items-start gap-3 py-1">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 dark:bg-destructive/10">
            <CircleAlertIcon className="size-5 text-destructive" />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <AlertDialogTitle className="font-semibold text-sm">{title}</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground text-sm">
              {description}
            </AlertDialogDescription>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={loading}
            onClick={(event) => {
              event.preventDefault();
              if (!loading) onConfirm?.();
            }}
          >
            {loading ? <Spinner /> : null}
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function ConfirmSignOut({
  open,
  onOpenChange,
  onConfirm,
  title = "Are you sure?",
  description = "You can always log in later to your account.",
  confirmText = "Yes, Logout",
  cancelText = "No",
  loading = false,
}: ConfirmDialogProps) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        if (loading && !next) return;
        onOpenChange(next);
      }}
    >
      <AlertDialogContent size="sm" className="gap-0 overflow-hidden p-0 sm:max-w-sm">
        <div className="flex flex-col items-center justify-center gap-2 p-8">
          <AlertDialogMedia className="size-12 rounded-full bg-violet-50 text-violet-500 dark:bg-violet-950 dark:text-violet-400">
            <ShieldQuestionMarkIcon className="size-6" />
          </AlertDialogMedia>
          <AlertDialogTitle className="text-center font-semibold text-base">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="p-0 text-center font-medium text-sm">
            {description}
          </AlertDialogDescription>
        </div>
        <AlertDialogFooter className="grid flex-none grid-cols-2 gap-0 divide-x border-t pt-0">
          <AlertDialogCancel
            variant="ghost"
            className="h-12 flex-1 rounded-none border-0 border-border border-r p-0"
            disabled={loading}
          >
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            variant="ghost"
            disabled={loading}
            onClick={(event) => {
              event.preventDefault();
              if (!loading) onConfirm?.();
            }}
            className="h-12 flex-1 rounded-none border-0 p-0"
          >
            {loading ? <Spinner /> : null}
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
