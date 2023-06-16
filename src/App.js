import Categories from "./components/Categories";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App( router ) {
  return (
    <div className="App">

      
       <BrowserRouter>
      <Search />
      <Categories />
      <Pages />
      </BrowserRouter>

    </div>

  );
}

export default App;
