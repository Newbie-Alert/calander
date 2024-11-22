import React from "react";
import { GloablStyle } from "./common/GlobalStyles";
import Calander from "./components/Calander";
import Layout from "./components/Layout/Layout";
import { GlobalModalProvider } from "./context/GlobalModalContext";
import GlobalModal from "./common/GloabalModal/GlobalModal";

function App() {
  return (
    <React.Fragment>
      <GloablStyle />
      <GlobalModalProvider>
        <GlobalModal />
        <Layout>
          <Calander />
        </Layout>
      </GlobalModalProvider>
    </React.Fragment>
  );
}

export default App;
