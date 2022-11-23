import "./App.css";
import styled from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
import { UserProvider } from "./context/User";
import { Auth } from "./modules/Auth/Auth";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <GlobalStyle />
        <UserProvider>
          <Auth></Auth>
        </UserProvider>
      </MainWrapper>
    </div>
  );
}

export default App;

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
