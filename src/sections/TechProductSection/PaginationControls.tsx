import React from "react";
import Icon from "../../components/Icon/Icon";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  const isFirst = page === 1;
  const isLast = page === totalPages;

  return (
    <div className="w-fit border py-2 px-3 shadow-custom-sm flex items-center gap-3 bg-white border-[#DAE4F2] rounded-lg whitespace-nowrap">
      <button
        aria-label="Previous page"
        disabled={isFirst}
        onClick={() => onPageChange(page - 1)}
        className={isFirst ? "cursor-not-allowed" : ""}
      >
        {isFirst ? (
          <Icon icon="Arrowbuttons" width={40} height={40} />
        ) : (
          <Icon
            icon="ArrowbuttonsActive"
            width={40}
            height={40}
            otherClasses="rotate-180"
          />
        )}
      </button>

      <p className="body !text-sm leading-[150%]">
        Page
        <span className="bg-textGradient ml-1 bg-clip-text text-transparent text-sm">
          {page} of {totalPages}
        </span>
      </p>

      <button
        aria-label="Next page"
        disabled={isLast}
        onClick={() => onPageChange(page + 1)}
        className={isLast ? "cursor-not-allowed" : ""}
      >
        {isLast ? (
          <Icon
            icon="Arrowbuttons"
            width={40}
            height={40}
            otherClasses="rotate-180"
          />
        ) : (
          <Icon icon="ArrowbuttonsActive" width={40} height={40} />
        )}
      </button>
    </div>
  );
};

export default PaginationControls;
