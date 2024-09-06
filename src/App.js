// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Gallery from './components/Gallery';
/**
 * The main App component
 * This component renders the main page structure
 * @returns {React.ReactElement} The rendered App component
 */
function App() {
  return (
    <div className="App flex p-2 bg-gradient-to-b from-[#272c31] to-[#191b1f] overflow-y-hidden ">
      <div className="w-[800px] h-[689px] bg-[#565758] rounded-[20px] mx-2 border border-[#96BEE7]"></div>
      <div>
        <About />
        <div className='bar w-[612px] h-[4px] bg-[#161616] rounded-full m-[auto] my-4'></div>
        <Gallery />
        <div className='bar w-[612px] h-[4px] bg-[#161616] rounded-full m-[auto] my-4'></div>
      </div>
    </div>
  );
}

export default App;
