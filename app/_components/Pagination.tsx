import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Show max 5 pages around current page
  const visiblePages = pages.filter((page) => {
    if (totalPages <= 5) return true;
    if (page === 1 || page === totalPages) return true;
    if (Math.abs(page - currentPage) <= 1) return true;
    return false;
  });

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="ページネーション">
      {/* Previous */}
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="px-4 py-2 rounded-lg border border-gray-200 text-brand-black hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
        >
          前へ
        </Link>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => {
          const prevPage = visiblePages[index - 1];
          const showEllipsis = prevPage && page - prevPage > 1;

          return (
            <span key={page} className="flex items-center gap-1">
              {showEllipsis && (
                <span className="px-2 text-brand-gray-dark">...</span>
              )}
              <Link
                href={getPageUrl(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                  page === currentPage
                    ? "bg-brand-blue text-white"
                    : "border border-gray-200 text-brand-black hover:bg-brand-blue hover:text-white hover:border-brand-blue"
                }`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            </span>
          );
        })}
      </div>

      {/* Next */}
      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="px-4 py-2 rounded-lg border border-gray-200 text-brand-black hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors"
        >
          次へ
        </Link>
      )}
    </nav>
  );
}
