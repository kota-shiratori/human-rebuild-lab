export default function Loading() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-wrapper">
        <div className="animate-pulse space-y-8">
          {/* Hero skeleton */}
          <div className="h-48 bg-brand-gray rounded-2xl" />
          
          {/* Content skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[16/10] bg-brand-gray rounded-2xl" />
                <div className="h-4 bg-brand-gray rounded w-1/4" />
                <div className="h-6 bg-brand-gray rounded w-3/4" />
                <div className="h-4 bg-brand-gray rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
