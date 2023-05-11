import axios from "axios";
import React from "react";
import SearchBar from "./components/search/Search";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadingProgress from "./components/Loading/LoadingProgress";
import LoadMoreButton from "./components/button/LoadMoreButton";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const apiKey = "35860917-ae58d27919211058597a13439";
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("");
  // const [displayCount, setDisplayCount] = useState(12);
  // const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(12);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (term !== "") {
      setIsLoading(true)
      axios(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&page=1&per_page=${imagesPerPage}`)
        .then((res) => {
          setImages(res.data.hits);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [term, imagesPerPage]);

const handleSearch = (text) => {
  setTerm(text);
  // setDisplayCount(12);
  setImagesPerPage(12);
}

  const handleLoadMore = () => {
    // setDisplayCount(displayCount + 12);
    // const newDisplayCount = displayCount + 12;
    const nextPage = currentPage + 1;
    axios(
      `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&page=${nextPage}&per_page=${imagesPerPage}`
    )
    .then((res) => {
      if (res.data.hits.length === 0) {
        setHasMore(false);
      } else {
        setImages([...images, ...res.data.hits]);
        // setImages((prevImages) => [...prevImages, ...res.data.hits]);
        // setImages(res.data.hits);
        // setDisplayCount(newDisplayCount); //+
        setCurrentPage(nextPage);
      }
    })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <SearchBar searchText={handleSearch} />
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <>
          <ImageGallery images={images} />
          {!isLoading && images.length === 0 && <h1>What should be found for you?</h1>}
          {!isLoading && images.length > 0 && (
            <>
              {hasMore ? (
                <LoadMoreButton handleLoadMore={handleLoadMore} />
              ) : (
                <h1>Nothing more</h1>
              )}
            </>
          )}
        </>
      )}

      {/* <SearchBar searchText={handleSearch} />
      {!isLoading && images.length === 0 && <h1>NO images found</h1>}
      {isLoading ? (
        <LoadingProgress /> 
      ) : (
        <ImageGallery images={images} />
      )}
      {term !== "" && <LoadMoreButton handleLoadMore={handleLoadMore} />} */}
    </div>
  );
}

export default App;
