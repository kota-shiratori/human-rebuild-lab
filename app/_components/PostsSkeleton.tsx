export default function PostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-2xl bg-white overflow-hidden border border-gray-100">
          <div className="aspect-[16/10] bg-brand-gray" />
          <div className="p-6 space-y-4">
            <div className="flex gap-3">
              <div className="h-6 w-16 bg-brand-gray rounded-full" />
              <div className="h-6 w-24 bg-brand-gray rounded" />
            </div>
            <div className="h-6 bg-brand-gray rounded w-3/4" />
            <div className="h-4 bg-brand-gray rounded w-full" />
            <div className="h-4 bg-brand-gray rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
