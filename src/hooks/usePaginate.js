import { useState,useEffect } from "react";

export const usePaginate = (data,itemsPerPage=10) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        setCurrentData(data.slice(0, itemsPerPage));
    }, [data, itemsPerPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCurrentData(data.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage));
    }

    return {
        currentData,
        currentPage,
        totalPages,
        paginate
    }
}