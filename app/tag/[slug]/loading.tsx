export default function Loading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="section-wrapper">
          <div className="animate-pulse">
            <div className="h-4 bg-white/20 rounded w-12 mb-2" />
            <div className="h-16 bg-white/20 rounded w-48 mb-4" />
            <div className="h-6 bg-white/20 rounded w-64" />
          </div>
        </div>
      </section>

      {/* Tags skeleton */}
      <section className="bg-white border-b border-gray-100">
        <div className="section-wrapper py-6">
          <div className="flex flex-wrap gap-3 animate-pulse">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-brand-gray rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Posts skeleton */}
      <section className="bg-white py-12 md:py-16">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-pulse">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="rounded-2xl bg-brand-gray overflow-hidden">
                <div className="aspect-[16/10]" />
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="h-6 w-16 bg-gray-200 rounded-full" />
                    <div className="h-6 w-24 bg-gray-200 rounded" />
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
