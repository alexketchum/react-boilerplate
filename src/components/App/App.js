import React from 'react';
import styled from 'styled-components';

export const AppContainer = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

const App = () => <AppContainer><h1>React Boilerplate!</h1></AppContainer>;

export default App;
