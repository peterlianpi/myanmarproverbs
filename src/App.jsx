import "./App.css";
import Main from "./Pages/Main";
import Proverb from "./Pages/Proverb";
import Proverbs from "./Pages/Proverbs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import all_data from "./assets/MyanmarProverbs.json";

const App = () => {
  const data = all_data;
  const titleName = data.Tbl_MMProverbsTitle;
  const proverbs = all_data.Tbl_MMProverbs;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main data={titleName} />} />
          <Route
            path="/proverbs/:id"
            element={<Proverbs data={{ titleName, proverbs }} />}
          />
          <Route
            path="/proverb/:id1/:id2"
            element={<Proverb data={proverbs} />}
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
