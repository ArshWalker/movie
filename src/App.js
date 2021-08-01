import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
function App() {
  return (
    <>
      <Header></Header>
      <div className="app">Movies Data </div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </>
  );
}

export default App;
