import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Heading from "./Components/Heading";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Heading/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
