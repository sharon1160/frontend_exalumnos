import styled from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
import { UserProvider } from "./context/User";
import { Auth } from "./modules/Auth/Auth";
import AppRouter from "./modules/AppRouter";
import { theme } from "./theme/globalStyle";

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <GlobalStyle />
        <UserProvider>
          <Auth>
            <AppRouter />
          </Auth>
        </UserProvider>
      </MainWrapper>
    </div>
  );
}

export default App;

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.palette.black.minus1};
`;
