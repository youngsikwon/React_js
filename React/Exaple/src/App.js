import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
