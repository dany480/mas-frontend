import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './styles/global'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;