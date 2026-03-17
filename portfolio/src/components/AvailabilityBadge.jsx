export default function AvailabilityBadge() {
  return (
    <div className="flex items-center gap-1.5 rounded-full border-[1.5px] border-[#2d6a2d] bg-[#1a3a1a] p-1.5 transition-transform duration-200 hover:scale-105 md:px-2 md:py-0.5 w-fit">
      <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]"></span>
      </span>
      <span className="hidden text-[12px] font-medium leading-normal tracking-normal text-[#86efac] md:block">
        Available for a Summer 2026 Internship
      </span>
    </div>
  );
}
