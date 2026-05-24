import { CircleAlert } from "lucide-solid";

interface ServerErrorProps {
  message?: string | null;
}

export function ServerError(props: ServerErrorProps) {
  if (!props.message) return null;

  return (
    <p class="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-900/30 px-3 py-2 text-sm text-red-300">
      <CircleAlert class="size-4 shrink-0" />
      {props.message}
    </p>
  );
}
