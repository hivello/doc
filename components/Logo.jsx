import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo-hivello.png"
        alt="Logo"
        width={104}
        height={44}
        priority
      />
      <span className="font-bold">Documentation</span>
    </div>
  );
}
