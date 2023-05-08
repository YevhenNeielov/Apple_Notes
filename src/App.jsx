import Buttons from "./components/Buttons";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div className="container">
      <div className="header">
        <Buttons />
        <SearchBox />
      </div>
      <div className="main">
        <Sidebar />
        <Workspace />
      </div>
    </div>
  );
}

export default App;
