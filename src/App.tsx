import SearchBar from "./components/SearchBar";
import DisplayRecipes from "./components/DisplayRecipes";
import "./App.css";

import { Button, useColorMode } from "@chakra-ui/react";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <h1>Recipe Me!</h1>
      <SearchBar />
      <DisplayRecipes />
    </div>
  );
};

export default App;
