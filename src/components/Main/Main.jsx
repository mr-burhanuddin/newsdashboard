import React, { useState, useEffect } from "react";
import news from "../../api/news";
import Card from "./Card";
import "./Main.css";
import ReactPaginate from "react-paginate";

function Main() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchRes = async () => {
      const res = await news.get();
      setPosts(res.data.data);
    };
    fetchRes();
  }, []);
  console.log("i am data", posts);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(
    indexOfLastPost,
    indexOfLastPost + postsPerPage
  );
  const pageNumber = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };
  console.log(currentPage);

  return (
    <div className="main">
      <div className="main__cardContainer">
        {currentPosts.map(({ id, link, published, summary, title }) => (
          <Card
            title={title}
            id={id}
            key={id}
            link={link}
            date={published}
            summary={summary}
          />
        ))}
      </div>
      <>
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageNumber}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousClassName={"previousBttn"}
          nextClassName={"nextBttn"}
          activeClassName={"paginationActive"}
        />
      </>
    </div>
  );
}

export default Main;
