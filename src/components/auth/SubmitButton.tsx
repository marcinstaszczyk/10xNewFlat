import type { JSX } from "solid-js";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  pending: boolean;
  pendingText: string;
  icon: JSX.Element;
  children: JSX.Element;
}

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={props.pending}
      class="w-full rounded-lg bg-purple-600 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-500"
    >
      {props.pending ? (
        <span class="flex items-center gap-2">
          <span class="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          {props.pendingText}
        </span>
      ) : (
        <span class="flex items-center gap-2">
          {props.icon}
          {props.children}
        </span>
      )}
    </Button>
  );
}
