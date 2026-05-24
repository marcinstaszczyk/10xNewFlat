import { Eye, EyeOff } from "lucide-solid";

interface PasswordToggleProps {
  visible: boolean;
  onToggle: () => void;
}

export function PasswordToggle(props: PasswordToggleProps) {
  return (
    <button
      type="button"
      onClick={props.onToggle}
      class="absolute top-1/2 right-3 -translate-y-1/2 text-white/40 transition-colors hover:text-white/70"
      aria-label={props.visible ? "Hide password" : "Show password"}
    >
      {props.visible ? <EyeOff class="size-4" /> : <Eye class="size-4" />}
    </button>
  );
}
