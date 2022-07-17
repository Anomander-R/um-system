import "./App.css";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "./components";
// import theme from "./theme";

import Main from "./components/Main";

function App() {
  return (
    // <BrowserRouter>
    //   <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            Test
            <Main/>

          </header>
        </div>
    //   </ThemeProvider>
    // </BrowserRouter>
  );
}

export default App;
