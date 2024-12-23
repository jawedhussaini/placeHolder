'use client';

import { Pagination } from '@mantine/core';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Paginations({ totalPagess }: { totalPagess: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get('page')) || 1;
  const [page, setPage] = useState(currentPage);

  // Function to create URL with updated page number
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Handle page change and update URL
  const handlePageChange = (pageNumber: number) => {
    const newURL = createPageURL(pageNumber);
    window.history.pushState({}, '', newURL); // Change URL without reloading
    setPage(pageNumber); // Update state to reflect the current page
  };

  useEffect(() => {
    // Sync state with the current page from the URL on mount
    setPage(currentPage);
  }, [currentPage]);

  return (
    <Pagination
      total={totalPagess}
      onChange={handlePageChange}
      
    />
  );
}
