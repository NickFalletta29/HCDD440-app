import React from 'react';
import styled from 'styled-components';
import Navbar from '/components/navbar';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  background: var(--background);
`;

const SellPage = () => {
  return (
    <Container>
        <Navbar />
        <h1>SellPage</h1>
    </Container>
  );
};

export default SellPage;