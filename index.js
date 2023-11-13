function ListPagination(data, currentPage=1, itemsPerPage=5) {
    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Validate current page
    currentPage = currentPage < 1 ? 1 : currentPage;
    currentPage = currentPage > totalPages ? totalPages : currentPage;

    // Calculate the index of the first and last items on the current page
    const firstItem = (currentPage - 1) * itemsPerPage + 1;
    const lastItem = Math.min(currentPage * itemsPerPage, data.length);

    // Generate URLs for next and previous pages
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;
    const prevPage = currentPage > 1 ? currentPage - 1 : null;

    // Get the data for the current page
    const currentPageData = data.slice(firstItem-1, lastItem);

    // Determine if the current page is the first or last page
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    // Return pagination information
    return {
        currentPage: currentPage,
        totalItems: data.length,
        itemsPerPage: itemsPerPage,
        firstItem: firstItem,
        lastItem: lastItem,
        nextPage: nextPage,
        prevPage: prevPage,
        lastPage: totalPages,
        isFirstPage: isFirstPage,
        isLastPage: isLastPage,
        data: currentPageData
    };
}



// Object paginate

function ObjectPagination(data, currentPage=1, itemsPerPage=5) {
    // Convert the object keys into an array
    const keysArray = Object.keys(data);

    // Calculate total number of pages
    const totalPages = Math.ceil(keysArray.length / itemsPerPage);

    // Validate current page
    currentPage = currentPage < 1 ? 1 : currentPage;
    currentPage = currentPage > totalPages ? totalPages : currentPage;

    // Calculate the index of the first and last items on the current page
    const firstItemIndex = (currentPage - 1) * itemsPerPage;
    const lastItemIndex = Math.min(currentPage * itemsPerPage, keysArray.length);

    // Get the keys for the current page
    const currentPageKeys = keysArray.slice(firstItemIndex, lastItemIndex);

    // Create an object with the properties for the current page
    const currentPageData = {};
    currentPageKeys.forEach(key => {
        currentPageData[key] = data[key];
    });
    
    // Calculate page numbers for previous and next pages
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    // Determine if the current page is the first or last page
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    // Return pagination information including the data for the current page
    return {
        currentPage: currentPage,
        totalItems: keysArray.length,
        itemsPerPage: itemsPerPage,
        firstItemIndex: firstItemIndex + 1,
        lastItemIndex: lastItemIndex,
        firstPage: 1,
        lastPage: totalPages,
        isFirstPage: isFirstPage,
        isLastPage: isLastPage,
        prevPage: prevPage,
        nextPage: nextPage,
        currentPageData: currentPageData
    };
}

module.exports = {ListPagination,ObjectPagination}