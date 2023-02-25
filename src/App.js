import './App.css';
import Nav from './components/navbar'
import BodyOne from './components/bodyOne';
import SecNav from './components/secondNav';
import Product from './components/product';
import Mid from './components/mid';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav /><br/>
      <BodyOne />
      <br/><br/>
      <SecNav />
      <br/><br/>
      <Product />
      <br/>
      <br/>
      <img src="https://www.shutterstock.com/image-photo/collage-photos-young-people-fashion-260nw-1724618173.jpg" alt="" style={{width:"100%",height:"28rem"}} />
      <br /><br/>
      <Mid /><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default App;
