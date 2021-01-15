
export const fetchRecipes = async (query: string) => {
    const recipeAPI = 'http://www.recipepuppy.com/api/';
    const nocors = `https://cors-anywhere.herokuapp.com/`; // frontend workaround for the API CORS issue
    const data = await fetch(`${nocors + recipeAPI}?q=${encodeURI(query)}`).then(response => response.json()).then(data => data);

    console.log('data', data)
    return data.results;
};
