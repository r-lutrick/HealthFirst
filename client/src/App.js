import "bootstrap/dist/css/bootstrap.min.css"
// Views
import Main from "./views/Main";
import NavBar from "./views/NavBar";
import TableOfContents from "./views/TableOfContents";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="d-flex">
        <TableOfContents />
        <Main />
      </div>
    </div>
  );
}

export default App;
