import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const paginationVariants = cva(
  'join',
  {
    variants: {
      size: {
        xs: 'join-xs',
        sm: 'join-sm',
        md: '',
        lg: 'join-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const paginationItemVariants = cva(
  'join-item btn',
  {
    variants: {
      variant: {
        default: 'btn-outline',
        active: 'btn-active',
        disabled: 'btn-disabled',
      },
      size: {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface PaginationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paginationVariants> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  disabled?: boolean;
}

export interface PaginationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationItemVariants> {
  page?: number;
  isActive?: boolean;
}

export const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ className, variant, size, page, isActive, disabled, children, ...props }, ref) => {
    const computedVariant = isActive ? 'active' : disabled ? 'disabled' : variant;

    return (
      <button
        ref={ref}
        className={cn(paginationItemVariants({ variant: computedVariant, size }), className)}
        disabled={disabled}
        {...props}
      >
        {children ?? page}
      </button>
    );
  }
);
PaginationItem.displayName = 'PaginationItem';

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({
    className,
    size,
    currentPage,
    totalPages,
    onPageChange,
    showFirstLast = true,
    showPrevNext = true,
    maxVisiblePages = 5,
    disabled = false,
    ...props
  }, ref) => {
    const getVisiblePages = () => {
      if (totalPages <= maxVisiblePages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const halfVisible = Math.floor(maxVisiblePages / 2);
      let start = Math.max(1, currentPage - halfVisible);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      // Adjust start if we're near the end
      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    };

    const visiblePages = getVisiblePages();
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePageClick = (page: number) => {
      if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    return (
      <div ref={ref} className={cn(paginationVariants({ size }), className)} {...props}>
        {/* First Page */}
        {showFirstLast && !visiblePages.includes(1) && (
          <>
            <PaginationItem
              size={size}
              page={1}
              onClick={() => handlePageClick(1)}
              disabled={disabled || isFirstPage}
            />
            {visiblePages[0] > 2 && (
              <PaginationItem size={size} disabled>
                ...
              </PaginationItem>
            )}
          </>
        )}

        {/* Previous */}
        {showPrevNext && (
          <PaginationItem
            size={size}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={disabled || isFirstPage}
          >
            ‹
          </PaginationItem>
        )}

        {/* Page Numbers */}
        {visiblePages.map((page) => (
          <PaginationItem
            key={page}
            size={size}
            page={page}
            isActive={page === currentPage}
            onClick={() => handlePageClick(page)}
            disabled={disabled}
          />
        ))}

        {/* Next */}
        {showPrevNext && (
          <PaginationItem
            size={size}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={disabled || isLastPage}
          >
            ›
          </PaginationItem>
        )}

        {/* Last Page */}
        {showFirstLast && !visiblePages.includes(totalPages) && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <PaginationItem size={size} disabled>
                ...
              </PaginationItem>
            )}
            <PaginationItem
              size={size}
              page={totalPages}
              onClick={() => handlePageClick(totalPages)}
              disabled={disabled || isLastPage}
            />
          </>
        )}
      </div>
    );
  }
);
Pagination.displayName = 'Pagination';

// Simple pagination with just prev/next
export interface SimplePaginationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paginationVariants> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  showPageInfo?: boolean;
}

export const SimplePagination = React.forwardRef<HTMLDivElement, SimplePaginationProps>(
  ({
    className,
    size,
    currentPage,
    totalPages,
    onPageChange,
    disabled = false,
    showPageInfo = true,
    ...props
  }, ref) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePageClick = (page: number) => {
      if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    return (
      <div ref={ref} className={cn(paginationVariants({ size }), className)} {...props}>
        <PaginationItem
          size={size}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={disabled || isFirstPage}
        >
          ‹ Previous
        </PaginationItem>

        {showPageInfo && (
          <PaginationItem size={size} disabled>
            {currentPage} of {totalPages}
          </PaginationItem>
        )}

        <PaginationItem
          size={size}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={disabled || isLastPage}
        >
          Next ›
        </PaginationItem>
      </div>
    );
  }
);
SimplePagination.displayName = 'SimplePagination';

