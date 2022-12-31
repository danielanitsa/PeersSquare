import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import LoginPage from "./pages/LoginPage";

function App() {
  const [theme, setTheme] = useState(true);
  const [isTheGifReal, setIsTheGifReal] = useState(false);
  const [gifSelected, setGifSelected] = useState();
  const [url, setUrl] = useState("");
  const [isBackcground, setIsBackcground] = useState(false);

  return (
    <div
      className={
        theme
          ? `bg-[#424549]  h-screen transition ease-linear delay-150`
          : `bg-gray-100 h-screen  transition ease-linear delay-150`
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="chat"
            element={
              <Chat
                theme={theme}
                setTheme={setTheme}
                isTheGifReal={isTheGifReal}
                setIsTheGifReal={setIsTheGifReal}
                gifSelected={gifSelected}
                setGifSelected={setGifSelected}
                url={url}
                setUrl={setUrl}
                isBackcground={isBackcground}
                setIsBackcground={setIsBackcground}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
