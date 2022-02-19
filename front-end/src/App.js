import { Routes, Route } from "react-router-dom";
import Announcement from "./Components/Announcement";
import NavBar from "./Components/NavBar";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="main">
      <Announcement/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pins" element={<Index />} />
        <Route path="/pins/new" element={<New />} />
        <Route exact path="/pins/:id" element={<Show />} />
        <Route path="/pins/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
