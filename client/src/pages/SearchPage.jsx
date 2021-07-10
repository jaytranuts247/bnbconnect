import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MapSearch from "../components/Maps/MapSearch.component";
import SearchListings from "../components/SearchListings/SearchListing.component";

import { Wrapper } from "../styles/Bases";
import WithLoading from "../components/WithLoading.component";
import MapIcon from "@material-ui/icons/Map";

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex: 1;
  position: relative;

  .search__left {
    max-width: 808px;
    flex: 0 0 60%;
    height: 100vh;
    overflow: auto;
  }

  .search__right {
    flex: 1 0 40%;
    height: 100vh;
  }

  .map-btn {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    background: #222222;
    color: white;
    padding: 10px 14px;
    font-size: 1.4rem;
    border-radius: 10px;
    cursor: pointer;
    z-index: 40;
  }

  .search-map {
    display: flex;
    position: absolute;
    z-index: 35;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  @media screen and (max-width: 1024px) {
    .search__left {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

const SearchPage = () => {
  const [width, setWindowWidth] = useState(0);
  const [toggleMap, setToggleMap] = useState(false);

  const handleClickMap = () => setToggleMap((prep) => !prep);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Wrapper>
      <Container>
        <div className="search__left">
          <SearchListings />
        </div>
        {width > 1024 ? (
          <div className="search__right">
            <MapSearch />
          </div>
        ) : (
          <div className="map-btn" onClick={handleClickMap}>
            Map <MapIcon style={{ marginLeft: 5 }} />
          </div>
        )}

        {width <= 1024 && toggleMap && (
          <div className="search-map">
            <MapSearch />
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default WithLoading(SearchPage);
