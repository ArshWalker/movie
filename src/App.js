import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import  { ThemeProvider } from 'styled-components';

function App() {

  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
    
     <ThemeProvider theme={themeMode} className="toggle">
     <Header></Header>
     <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} className="toggle"/>
      <div className="app stripe">
        <Container>
          <Switch>
          <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
     </ThemeProvider>
      
    </BrowserRouter>
  );
}

export default App;
