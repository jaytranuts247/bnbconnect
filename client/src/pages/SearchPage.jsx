import React from "react";
import styled from "styled-components";

import MapSearch from "../components/Maps/MapSearch.component";
import SearchListings from "../components/SearchListings/SearchListing.component";

import { Wrapper } from "../styles/Bases";
import WithLoading from "../components/WithLoading.component";

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex: 1;

  .search__left {
    max-width: 808px;
    flex: 0 0 60%;
    height: 100vh;
    overflow: auto;
  }
  .search__right {
    flex: 0 0 40%;
    height: 100vh;
  }
`;

const SearchPage = () => {
  return (
    <Wrapper>
      <Container>
        <div className="search__left">
          <SearchListings />
        </div>
        <div className="search__right">
          <MapSearch />
        </div>
      </Container>
    </Wrapper>
  );
};

export default WithLoading(SearchPage);
