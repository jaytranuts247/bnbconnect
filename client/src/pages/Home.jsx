import React from "react";

import SearchBar from "../components/SearchBar/SearchBar.component";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Home = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

export default Home;
