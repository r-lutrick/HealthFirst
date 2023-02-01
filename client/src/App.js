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
        <div className="col-2">
          <TableOfContents />
        </div>
        <div className="col-10">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
