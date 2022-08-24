import ReactPaginate from "react-paginate"

type PaginationProps = {
  onPageChange: (selectedItem: PageChangeEvent) => void
  pageCount?: number
}

export type PageChangeEvent = {
  selected: number
}

export const Pagination = (props: PaginationProps) => {
  const { onPageChange, pageCount } = props

  // Invoke when user click to request another page.

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={onPageChange}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      pageCount={pageCount ? pageCount : 0}
      previousLabel="Previous"
      containerClassName="flex justify-center items-center"
      pageClassName="mr-6 px-2"
      nextClassName="mr-6 border-rose-600 border-2 rounded-r-sm bg-rose-600 px-1 py-1"
      previousClassName="mr-6 border-rose-600 border-2 rounded-l-sm bg-rose-600 px-1 py-1"
      breakLinkClassName="mr-6"
      activeClassName="rounded-sm border-2 border-rose-600 bg-rose-600 py-1"
    />
  )
}
