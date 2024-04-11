import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo-hivello.svg"
        alt="Logo"
        width={180}
        height={57}
        priority
      />
      <span className="font-bold">Documentation</span>
    </div>
  );
}
