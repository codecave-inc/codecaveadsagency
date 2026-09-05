import Image from "next/image";
import Link from "next/link";
import { Billboard, formatNaira } from "@/lib/mock-billboards";

export default function BillboardCard({ billboard }: { billboard: Billboard }) {
  return (
    <Link
      href={`/billboards/${billboard.id}`}
      className="block bg-surface-card rounded-xl overflow-hidden border border-border-subtle hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full h-44">
        <Image
          src={billboard.images[0]}
          alt={billboard.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-2 left-2 badge bg-white/90 text-on-surface">
          {billboard.type}
        </span>
        {billboard.verifiedOwner && (
          <span className="absolute top-2 right-2 badge badge-approved bg-white/90">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Verified
          </span>
        )}
      </div>
      <div className="p-unit-md">
        <p className="font-semibold text-on-surface truncate">{billboard.title}</p>
        <p className="text-sm text-on-surface-variant">
          {billboard.city}, {billboard.state}
        </p>
        <div className="flex items-center justify-between mt-unit-sm">
          <p className="font-bold text-primary">
            {formatNaira(billboard.pricePerWeek)}
            <span className="text-xs font-normal text-on-surface-variant"> /week</span>
          </p>
          <p className="text-xs flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-secondary-container">
              star
            </span>
            {billboard.rating} ({billboard.reviewCount})
          </p>
        </div>
      </div>
    </Link>
  );
}
