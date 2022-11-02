import './App.css';
import { Navbar } from './components/navbar/index';
import { Sidebar } from './components/sidebar/index';
import { Compititors } from './layouts/compititors/index';
import { Info } from './layouts/info/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Info />
      <Compititors />
    </div>
  );
}

export default App;
