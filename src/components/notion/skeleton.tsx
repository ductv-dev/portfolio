import { cn } from "@/lib/utils";

export function SkeletonBar({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-sm bg-muted", className)} />;
}

export function PageSkeleton() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-8">
      <SkeletonBar className="h-4 w-32" />
      <SkeletonBar className="h-10 w-2/3" />
      <SkeletonBar className="h-4 w-full" />
      <SkeletonBar className="h-4 w-5/6" />
      <div className="space-y-4 pt-8">
        <SkeletonBar className="h-6 w-40" />
        <SkeletonBar className="h-20 w-full" />
        <SkeletonBar className="h-20 w-full" />
      </div>
    </div>
  );
}
