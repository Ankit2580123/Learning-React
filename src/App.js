import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>

   {/* <Navbar title="This is Title" about="This is About" contact={7903493441} /> */}
   {/* //this is for default */}
   {/* <Navbar/> */}
   <div className="container my-3" id='textForms'>
   <h1>Enter the text here</h1>
      <TextForm/>
   </div>
   
   </>
  );
}

export default App;
