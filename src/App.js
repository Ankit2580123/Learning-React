
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
   <>

   <Navbar title="This is Title" about="This is About" contact={7903493441} />
   {/* //this is for default */}
   {/* <Navbar/> */}
   </>
  );
}

export default App;
