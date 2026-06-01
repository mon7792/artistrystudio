const items = [
  "Digital Art",
  "Resin Art",
  "Flower Preservation",
  "Wedding Keepsakes",
  "Custom Commissions",
];

function Token({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-8 px-8 shrink-0">
      <span className="font-display italic text-[#1C1A17] text-2xl md:text-4xl whitespace-nowrap">
        {text}
      </span>
      <span
        aria-hidden
        className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A227]"
      />
    </span>
  );
}

export default function Marquee() {
  return (
    <section
      id="marquee"
      className="border-y border-[#C9A227]/20 bg-[#F4ECDB] py-8 md:py-10 overflow-hidden"
    >
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <Token key={i} text={t} />
        ))}
      </div>
    </section>
  );
}
