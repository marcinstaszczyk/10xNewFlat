import type { JSX } from "solid-js";
import { CircleAlert } from "lucide-solid";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-lg bg-white/10 border px-3 py-2 pl-10 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-colors";

interface FormFieldProps {
  id: string;
  name?: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  hint?: JSX.Element;
  icon: JSX.Element;
  endContent?: JSX.Element;
}

export function FormField(props: FormFieldProps) {
  return (
    <div>
      <label for={props.id} class="mb-1 block text-sm text-blue-100/80">
        {props.label}
      </label>
      <div class="relative">
        <span class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40">{props.icon}</span>
        <input
          id={props.id}
          name={props.name ?? props.id}
          type={props.type ?? "text"}
          value={props.value}
          onInput={(event) => {
            props.onChange(event.currentTarget.value);
          }}
          placeholder={props.placeholder}
          class={cn(
            inputBase,
            props.error ? "border-red-400/60 focus:ring-red-400" : "border-white/20 focus:ring-purple-400",
          )}
        />
        {props.endContent}
      </div>
      {props.error ? (
        <p class="mt-1 flex items-center gap-1 text-xs text-red-300">
          <CircleAlert class="size-3" />
          {props.error}
        </p>
      ) : (
        props.hint
      )}
    </div>
  );
}
