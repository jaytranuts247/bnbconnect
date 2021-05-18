import React, { useRef } from "react";

import SearchBar from "../components/SearchBar/SearchBar.component";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Home = () => {
  const searchBarRef = useRef();
  return (
    <Wrapper>
      <SearchBar ref={searchBarRef} />
    </Wrapper>
  );
};

export default Home;
