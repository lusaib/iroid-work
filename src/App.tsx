import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBackGroundProperties } from "./AppStyling";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBackGroundProperties>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} /> */}
              {/* <Route path="contact" element={<Contact />} />*/}
              {/* <Route path="*" element={<NoPage />} /> */}
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </AppBackGroundProperties>
      </header>
    </div>
  );
}

export default App;
