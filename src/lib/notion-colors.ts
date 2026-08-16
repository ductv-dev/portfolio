// Tailwind class strings must stay literal (not template-built) so the JIT scanner picks them up.
const TAG_COLORS = [
  "bg-[#E3E2E0] text-[#32302C] dark:bg-[#454340] dark:text-[#D4D4D4]",
  "bg-[#EEE0DA] text-[#442A1E] dark:bg-[#4A3228] dark:text-[#D9B8A5]",
  "bg-[#FADEC9] text-[#55341D] dark:bg-[#5C3B23] dark:text-[#F5C99B]",
  "bg-[#FDECC8] text-[#55340E] dark:bg-[#59460F] dark:text-[#F5D77A]",
  "bg-[#DBEDDB] text-[#24401F] dark:bg-[#253B29] dark:text-[#8FBC94]",
  "bg-[#D3E5EF] text-[#1D3A4C] dark:bg-[#1F3A4C] dark:text-[#7FB3D5]",
  "bg-[#E8DEEE] text-[#402C53] dark:bg-[#3A2D4D] dark:text-[#C69BE0]",
  "bg-[#F5E0E9] text-[#4C2540] dark:bg-[#4B2A40] dark:text-[#E3A6C9]",
] as const;

export function getTagColorClass(label: string) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash * 31 + label.charCodeAt(i)) | 0;
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
}
