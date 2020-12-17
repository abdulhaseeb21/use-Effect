import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Fetching } from './components/Fetching';
import { Example1 } from './components/Example1'
import { Example2 } from './components/Example2'


function App() {
  function Home() {
    return (
      <>
        <Link to='fetching'>fetching</Link>
        <br />
        <Link to='example1'>example1</Link>
        <br />
        <Link to='example2'>example2</Link>

      </>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='fetching' element={<Fetching />} />
        <Route path='example1' element={<Example1 />} />
        <Route path='example2' element={<Example2 />} />
      </Routes>
    </Router >
  );
}

export default App;
