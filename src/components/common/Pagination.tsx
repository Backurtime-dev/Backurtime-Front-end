import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
  windowSize?: number;
}

const PaginationControl = ({
  currentPage,
  totalPages,
  onPageChange,
  windowSize = 5,
}: PaginationControlProps) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };

  // Calculate sliding window start & end
  let startPage = Math.max(currentPage - Math.floor(windowSize / 2), 1);
  let endPage = startPage + windowSize - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - windowSize + 1, 1);
  }

  const pagesToShow = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            disabled={currentPage === 1}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {/* Page numbers */}
        {pagesToShow.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            disabled={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControl;
