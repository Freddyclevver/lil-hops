interface StickerBadgeProps {
  text: string;
  variant?: "coming-soon" | "single" | "bonus";
}

export default function StickerBadge({
  text,
  variant = "coming-soon",
}: StickerBadgeProps) {
  const bgColor = {
    "coming-soon": "bg-[color:var(--color-neon-pink)]",
    single: "bg-[color:var(--color-mint)]",
    bonus: "bg-[color:var(--color-mint)]",
  }[variant];

  const textColor = {
    "coming-soon": "text-[color:var(--color-bg)]",
    single: "text-[color:var(--color-bg)]",
    bonus: "text-[color:var(--color-bg)]",
  }[variant];

  return (
    <div
      className={`inline-block px-4 py-2 rounded-full font-bold ${bgColor} ${textColor} -rotate-3 transform`}
    >
      {text}
    </div>
  );
}
