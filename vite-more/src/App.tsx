import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputPage from './pages/InputPage/InputPage';
import RoulettePage from './pages/RoulettePage/RoulettePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/roulette" element={<RoulettePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
