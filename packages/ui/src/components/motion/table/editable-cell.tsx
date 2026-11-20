"use client";

export function EditableCell({
  value,
  label,
  placeholder,
  onChange,
}: {
  value: string;
  label: string;
  placeholder: string;
  onChange: (next: string) => void;
}) {
  return (
    <input
      value={value}
      aria-label={label}
      size={1}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="text-foreground placeholder:text-muted-foreground/40 focus:bg-muted focus:ring-ring -mx-2 w-full min-w-0 appearance-none rounded-md border-0 bg-transparent px-2 py-1 transition-colors outline-none focus:ring-1"
    />
  );
}
