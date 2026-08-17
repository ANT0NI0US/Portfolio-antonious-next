interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        title="Previous page"
        className="border-light/10 text-light/60 hover:border-primary/40 hover:text-light rounded-md border px-3 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-light/10 disabled:hover:text-light/60"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          aria-label={`Go to page ${page}`}
          title={`Go to page ${page}`}
          className={`flex size-9 items-center justify-center rounded-md text-sm font-semibold transition-colors ${
            page === currentPage
              ? "bg-primary text-secondary"
              : "border-light/10 text-light/60 hover:border-primary/40 hover:text-light border"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        title="Next page"
        className="border-light/10 text-light/60 hover:border-primary/40 hover:text-light rounded-md border px-3 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-light/10 disabled:hover:text-light/60"
      >
        Next
      </button>
    </nav>
  );
}
