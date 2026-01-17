export default function Loading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="bg-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto animate-pulse">
            {/* Breadcrumb */}
            <div className="h-4 bg-brand-gray rounded w-48 mb-6" />
            
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-7 w-20 bg-brand-gray rounded-full" />
              <div className="h-4 w-32 bg-brand-gray rounded" />
            </div>
            
            {/* Title */}
            <div className="space-y-3 mb-6">
              <div className="h-10 bg-brand-gray rounded w-full" />
              <div className="h-10 bg-brand-gray rounded w-2/3" />
            </div>
            
            {/* Description */}
            <div className="h-6 bg-brand-gray rounded w-full mb-8" />
            
            {/* Thumbnail */}
            <div className="aspect-[16/9] bg-brand-gray rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-4 bg-brand-gray rounded" 
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
