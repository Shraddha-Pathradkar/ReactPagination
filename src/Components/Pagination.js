import React from "react";

const Pagination = ({ totalPosts, postPerPage, paginate }) => {
  let pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pagesNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pagesNumbers.map((count) => {
          return (
            <li key={count} className="page-item">
              <a
                href="!#"
                className="page-link"
                onClick={() => paginate(count)}
              >
                {count}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
