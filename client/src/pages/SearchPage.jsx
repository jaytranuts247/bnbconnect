import React from "react";
import styled from "styled-components";

import MapSearch from "../components/Maps/MapSearch.component";
import SearchListings from "../components/SearchListings/SearchListing.component";

import { Wrapper } from "../styles/Bases";
import WithLoading from "../components/WithLoading.component";

const Container = styled.div`
  display: flex;
  width: 100vw;

  .search__left {
    max-width: 808px;
    flex: 1 1 55%;
    height: 100vh;
    overflow: scroll;
  }
  .search__right {
    flex: 1 1 45%;
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
