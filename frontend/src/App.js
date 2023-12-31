import './App.css';

import Header from "./Component/DefaultLayout/Header/Header.jsx";
import Footer from "./Component/DefaultLayout/Footer/Footer.jsx";
import Container from "./Component/Container/Container.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
