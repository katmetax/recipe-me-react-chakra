import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { debounce } from "throttle-debounce";

import { fetchRecipes } from "../../lib/fetchRecipes";

const debouncedQueries = debounce(500, (query: string) => fetchRecipes(query));

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    debouncedQueries(event.target.value);
  };

  return (
    <Input
      placeholder="Search for recipes"
      onChange={(e) => handleChange(e)}
      value={searchQuery}
    />
  );
};

export default SearchBar;
