
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Page from "./page/Page";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/*' element={<Login />} />
        <Route exact path="/page" element={<Page />} />
      </Routes>
    </div>

  );
}

export default App;
